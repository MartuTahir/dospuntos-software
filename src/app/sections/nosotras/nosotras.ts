import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { NOSOTRAS } from '../../shared/site-content';

@Component({
  selector: 'app-nosotras',
  imports: [Reveal],
  templateUrl: './nosotras.html',
  styles: ``,
})
export class Nosotras {
  protected readonly nosotras = NOSOTRAS;
}
