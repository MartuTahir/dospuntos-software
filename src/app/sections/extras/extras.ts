import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Reveal } from '../../shared/reveal';
import {
  EXTRAS,
  EXTRAS_BAJADA,
  EXTRAS_BOTON,
  EXTRAS_TITULO,
  WHATSAPP_URL,
} from '../../shared/site-content';

@Component({
  selector: 'app-extras',
  imports: [LucideAngularModule, Reveal],
  templateUrl: './extras.html',
  styles: ``,
})
export class Extras {
  protected readonly extras = EXTRAS;
  protected readonly titulo = EXTRAS_TITULO;
  protected readonly bajada = EXTRAS_BAJADA;
  protected readonly textoBoton = EXTRAS_BOTON;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
