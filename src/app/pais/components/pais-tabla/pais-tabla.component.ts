import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    .small-flags{ height: 70px;
 width: 70px;
    }`
  ]
})
export class PaisTablaComponent {
  @Input() paises: Country[] = []

  constructor() { }

}
