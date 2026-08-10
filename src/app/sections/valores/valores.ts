import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Reveal } from '../../shared/reveal';
import { VALORES } from '../../shared/site-content';

@Component({
  selector: 'app-valores',
  imports: [LucideAngularModule, Reveal],
  templateUrl: './valores.html',
  styles: ``,
})
export class Valores {
  protected readonly valores = VALORES;
}
