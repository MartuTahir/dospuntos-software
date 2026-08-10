import { Component } from '@angular/core';
import { Contacto } from './sections/contacto/contacto';
import { Hero } from './sections/hero/hero';
import { Nosotras } from './sections/nosotras/nosotras';
import { Paquetes } from './sections/paquetes/paquetes';
import { Portafolio } from './sections/portafolio/portafolio';
import { Proceso } from './sections/proceso/proceso';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { Valores } from './sections/valores/valores';
import { WhatsappFab } from './shared/whatsapp-fab';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    Hero,
    Valores,
    Paquetes,
    Portafolio,
    Proceso,
    Nosotras,
    Contacto,
    SiteFooter,
    WhatsappFab,
  ],
  templateUrl: './app.html',
})
export class App {}
