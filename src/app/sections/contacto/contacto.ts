import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import {
  CONTACTO,
  FORMULARIO_CLAVE,
  FORMULARIO_URL,
  WHATSAPP_NUMERO,
  WHATSAPP_URL,
} from '../../shared/site-content';

export type EstadoEnvio = 'inicial' | 'enviando' | 'enviado' | 'error';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contacto.html',
  styles: ``,
})
export class Contacto {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly textos = CONTACTO;
  protected readonly whatsappUrl = WHATSAPP_URL;

  protected readonly estado = signal<EstadoEnvio>('inicial');

  protected readonly formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    whatsapp: ['', [Validators.required, Validators.pattern(/^[\d\s+()-]{6,20}$/)]],
    necesidad: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    // Sin endpoint configurado, el envio se hace por WhatsApp: el visitante
    // igual llega a nosotras y no se pierde la consulta.
    if (!FORMULARIO_URL) {
      window.open(this.armarEnlaceWhatsapp(), '_blank', 'noopener');
      this.estado.set('enviado');
      this.formulario.reset();
      return;
    }

    this.estado.set('enviando');
    this.http
      // El header Accept es obligatorio para Formspree: sin el contesta una
      // pagina HTML en vez de JSON y el envio parece fallar aunque haya salido.
      .post(FORMULARIO_URL, this.armarCuerpo(), {
        headers: { Accept: 'application/json' },
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.estado.set('enviado');
          this.formulario.reset();
        },
        error: () => this.estado.set('error'),
      });
  }

  /**
   * Datos que se mandan al servicio de formularios.
   * `_subject` lo usa Formspree como asunto del mail; los servicios que no lo
   * entienden simplemente lo ignoran.
   * Si usás Web3Forms, cargá tambien FORMULARIO_CLAVE en site-content.ts.
   */
  private armarCuerpo(): Record<string, string> {
    const { nombre, whatsapp, necesidad } = this.formulario.getRawValue();
    const cuerpo: Record<string, string> = {
      nombre,
      whatsapp,
      necesidad,
      _subject: `Consulta de ${nombre} desde la web`,
    };

    if (FORMULARIO_CLAVE) cuerpo['access_key'] = FORMULARIO_CLAVE;
    return cuerpo;
  }

  /** Arma el mensaje de WhatsApp con lo que la persona escribio en el formulario. */
  private armarEnlaceWhatsapp(): string {
    const { nombre, whatsapp, necesidad } = this.formulario.getRawValue();
    const mensaje = `Hola! Soy ${nombre}. Mi WhatsApp es ${whatsapp}. ${necesidad}`;
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  }

  protected tieneError(campo: 'nombre' | 'whatsapp' | 'necesidad'): boolean {
    const control = this.formulario.controls[campo];
    return control.invalid && control.touched;
  }
}
