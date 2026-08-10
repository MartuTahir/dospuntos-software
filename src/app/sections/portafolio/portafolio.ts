import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Reveal } from '../../shared/reveal';
import { PROYECTOS } from '../../shared/site-content';

/** Cada paquete tiene su color de etiqueta, para que se distingan de un vistazo. */
const COLOR_POR_PAQUETE: Record<string, string> = {
  'Landing page': 'bg-primary-container/10 text-primary',
  'Sitio informativo': 'bg-secondary-container/40 text-on-secondary-container',
  'Sitio premium': 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
};

@Component({
  selector: 'app-portafolio',
  imports: [LucideAngularModule, Reveal],
  templateUrl: './portafolio.html',
  styles: ``,
})
export class Portafolio {
  protected readonly proyectos = PROYECTOS;

  protected colorEtiqueta(paquete: string): string {
    return COLOR_POR_PAQUETE[paquete] ?? 'bg-surface-container text-on-surface-variant';
  }
}
