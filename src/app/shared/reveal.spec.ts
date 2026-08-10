import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { Reveal } from './reveal';

@Component({
  imports: [Reveal],
  template: `<p appReveal [revealDelay]="150">contenido</p>`,
})
class Anfitrion {}

describe('Reveal', () => {
  it('aplica la clase .reveal y el retraso al elemento', async () => {
    await TestBed.configureTestingModule({ imports: [Anfitrion] }).compileComponents();

    const fixture = TestBed.createComponent(Anfitrion);
    fixture.detectChanges();

    const parrafo = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(parrafo.classList.contains('reveal')).toBe(true);
    expect(parrafo.style.transitionDelay).toBe('150ms');
  });

  it('muestra el contenido igual si no hay IntersectionObserver', async () => {
    const original = window.IntersectionObserver;
    // @ts-expect-error se elimina a proposito para simular un navegador sin soporte
    delete window.IntersectionObserver;

    await TestBed.configureTestingModule({ imports: [Anfitrion] }).compileComponents();
    const fixture = TestBed.createComponent(Anfitrion);
    fixture.detectChanges();

    const parrafo = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(parrafo.classList.contains('is-revealed')).toBe(true);

    window.IntersectionObserver = original;
  });
});
