import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personnel.component.html',
  styleUrl: './personnel.component.css'
})
export class PersonnelComponent {

  listes=[
    {
      id:0,
      route:'medecin',
    name:"medecin",
    description:"Charger de "
    }, {
      id:1,
      route:'medecin',

    name:"Infirmier",
    description:"Charger de "

    }, {
      id:2,
      route:'medecin',

    name:"pharmacien",
    description:"Charger de "

    }, {
      id:3,
      route:'medecin',

    name:"Administrateur",
    description:"Charger de "

    }, {
      id:4,
      route:'medecin',

    name:"Technicien Laboratoire",
    description:"Charger de "

    },

  ]
}
