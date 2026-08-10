import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NAVEGACION, WHATSAPP_URL } from '../../shared/site-content';

@Component({
  selector: 'app-site-header',
  imports: [LucideAngularModule],
  templateUrl: './site-header.html',
  styles: ``,
})
export class SiteHeader {
  protected readonly navegacion = NAVEGACION;
  protected readonly whatsappUrl = WHATSAPP_URL;
  protected readonly menuAbierto = signal(false);

  protected alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
