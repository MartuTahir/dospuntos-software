import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Reveal } from '../../shared/reveal';
import { PASOS } from '../../shared/site-content';

@Component({
  selector: 'app-proceso',
  imports: [LucideAngularModule, Reveal],
  templateUrl: './proceso.html',
  styles: ``,
})
export class Proceso {
  protected readonly pasos = PASOS;
}
