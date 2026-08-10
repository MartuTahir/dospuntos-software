import { AfterViewInit, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

/**
 * Hace aparecer el elemento con un fundido cuando entra en pantalla.
 * Uso en el template:  <section appReveal>  o  <div appReveal [revealDelay]="100">
 *
 * Si el visitante configuro su sistema para reducir animaciones, o si el
 * navegador no soporta IntersectionObserver, el contenido se muestra directo.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements AfterViewInit {
  /** Retraso en milisegundos, para escalonar la entrada de varias tarjetas. */
  readonly revealDelay = input(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const elemento = this.host.nativeElement;
    elemento.style.transitionDelay = `${this.revealDelay()}ms`;

    if (typeof IntersectionObserver === 'undefined' || this.prefiereMenosMovimiento()) {
      elemento.classList.add('is-revealed');
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        elemento.classList.add('is-revealed');
        observador.disconnect();
      },
      { threshold: 0.12 },
    );

    observador.observe(elemento);
    this.destroyRef.onDestroy(() => observador.disconnect());
  }

  private prefiereMenosMovimiento(): boolean {
    return (
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
