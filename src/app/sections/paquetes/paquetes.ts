import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Reveal } from '../../shared/reveal';
import { MANTENIMIENTO, PAQUETES, WHATSAPP_URL } from '../../shared/site-content';

@Component({
  selector: 'app-paquetes',
  imports: [LucideAngularModule, Reveal],
  templateUrl: './paquetes.html',
  styles: ``,
})
export class Paquetes {
  protected readonly paquetes = PAQUETES;
  protected readonly mantenimiento = MANTENIMIENTO;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
