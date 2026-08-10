import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  ANIO_ACTUAL,
  EMAIL,
  NAVEGACION,
  PIE,
  WHATSAPP_URL,
} from '../../shared/site-content';

@Component({
  selector: 'app-site-footer',
  imports: [LucideAngularModule],
  templateUrl: './site-footer.html',
  styles: ``,
})
export class SiteFooter {
  protected readonly pie = PIE;
  protected readonly navegacion = NAVEGACION;
  protected readonly anio = ANIO_ACTUAL;
  protected readonly email = EMAIL;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
