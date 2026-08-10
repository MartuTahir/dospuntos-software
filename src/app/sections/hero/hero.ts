import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HERO, WHATSAPP_URL } from '../../shared/site-content';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
