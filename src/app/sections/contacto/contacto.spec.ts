import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Instagram, LucideAngularModule, MessageCircle } from 'lucide-angular';
import { beforeEach, describe, expect, it } from 'vitest';
import { FORMULARIO_URL } from '../../shared/site-content';
import { Contacto } from './contacto';

/** Acceso a los miembros protegidos del componente para poder probarlos. */
type ContactoInterno = Contacto & {
  formulario: import('@angular/forms').FormGroup;
  estado: () => string;
  enviar: () => void;
};

describe('Contacto', () => {
  let fixture: ComponentFixture<Contacto>;
  let componente: ContactoInterno;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacto, LucideAngularModule.pick({ MessageCircle, Instagram })],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Contacto);
    componente = fixture.componentInstance as ContactoInterno;
    fixture.detectChanges();
  });

  it('arranca invalido y vacio', () => {
    expect(componente.formulario.invalid).toBe(true);
  });

  it('no envia nada si el formulario esta incompleto y marca los campos', () => {
    const http = TestBed.inject(HttpTestingController);

    componente.enviar();

    expect(componente.formulario.controls['nombre'].touched).toBe(true);
    expect(componente.estado()).toBe('inicial');
    http.verify();
  });

  it('rechaza un whatsapp que no parece un numero', () => {
    componente.formulario.patchValue({ whatsapp: 'no tengo' });
    expect(componente.formulario.controls['whatsapp'].valid).toBe(false);
  });

  it('acepta un whatsapp con espacios y guiones', () => {
    componente.formulario.patchValue({ whatsapp: '+54 11 5555-5555' });
    expect(componente.formulario.controls['whatsapp'].valid).toBe(true);
  });

  it('rechaza una necesidad demasiado corta', () => {
    componente.formulario.patchValue({ necesidad: 'hola' });
    expect(componente.formulario.controls['necesidad'].valid).toBe(false);
  });

  it('arma el cuerpo del envio con los tres campos y el asunto', () => {
    componente.formulario.setValue({
      nombre: 'María',
      whatsapp: '11 5555 5555',
      necesidad: 'Tengo una peluquería y quiero que me encuentren.',
    });

    const cuerpo = (componente as unknown as { armarCuerpo: () => Record<string, string> }).armarCuerpo();

    expect(cuerpo['nombre']).toBe('María');
    expect(cuerpo['whatsapp']).toBe('11 5555 5555');
    expect(cuerpo['necesidad']).toContain('peluquería');
    expect(cuerpo['_subject']).toContain('María');
  });

  it('postea los datos al servicio de formularios y marca el envio como hecho', () => {
    const http = TestBed.inject(HttpTestingController);
    componente.formulario.setValue({
      nombre: 'María',
      whatsapp: '11 5555 5555',
      necesidad: 'Tengo una peluquería y quiero que me encuentren.',
    });

    componente.enviar();

    const pedido = http.expectOne(FORMULARIO_URL);
    // Sin este header, Formspree contesta HTML y el envio parece fallar.
    expect(pedido.request.headers.get('Accept')).toBe('application/json');
    expect(pedido.request.body.nombre).toBe('María');
    expect(componente.estado()).toBe('enviando');

    pedido.flush({ success: true });
    expect(componente.estado()).toBe('enviado');
    http.verify();
  });

  it('avisa del error si el servicio falla', () => {
    const http = TestBed.inject(HttpTestingController);
    componente.formulario.setValue({
      nombre: 'María',
      whatsapp: '11 5555 5555',
      necesidad: 'Tengo una peluquería y quiero que me encuentren.',
    });

    componente.enviar();
    http.expectOne(FORMULARIO_URL).flush('caido', { status: 500, statusText: 'Server Error' });

    expect(componente.estado()).toBe('error');
    http.verify();
  });

  it('el enlace de respaldo de WhatsApp lleva los datos del formulario', () => {
    componente.formulario.setValue({
      nombre: 'María',
      whatsapp: '11 5555 5555',
      necesidad: 'Tengo una peluquería y quiero que me encuentren.',
    });

    const url = (
      componente as unknown as { armarEnlaceWhatsapp: () => string }
    ).armarEnlaceWhatsapp();

    expect(url).toContain('wa.me');
    expect(url).toContain(encodeURIComponent('María'));
    expect(url).toContain(encodeURIComponent('peluquería'));
  });
});
