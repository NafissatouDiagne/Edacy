import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from "../tables/tables.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { ApiService } from '../../api.service';
@Component({
    selector: 'app-medecin',
    standalone: true,
    templateUrl: './medecin.component.html',
    styleUrl: './medecin.component.css',
    imports: [CommonModule, TablesComponent, NavbarComponent]
})
export class MedecinComponent implements OnInit {
  allpatients:any=[]

listes=[
{id:0,
  name:'Nombre de RV',

  nbr:'',
  class:'mb-2 text-2xl font-ligth tracking-tight text-cyan-600 dark:text-blue-400',
  btn:'flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg'

},
{id:1,

  name:'Nbr Patients',
  nbr:'',
  class:'mb-2 text-2xl font-ligth tracking-tight text-red-700 dark:text-red-700',
  btn:'flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg'

},{id:2,
  name:'Nbr Patients Consulter',
  nbr:'',
  class:'mb-2 text-2xl font-ligth tracking-tight text-yellow-500 dark:text-yellow-500',
  btn:'flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg'


},
{id:3,
  name:'ebsdf',
  nbr:'',
  class:'mb-2 text-2xl font-ligth tracking-tight text-green-700 dark:text-green-700',
  btn:'flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg'


},
]
ngOnInit(): void {
    this.getAllPatient()
}
constructor(private apidata:ApiService){}

getAllPatient(){
  this.apidata.getPatients().subscribe((response)=>{
    this.allpatients= response.getpatients;
    this.listes[1].nbr= this.allpatients.length.toString()
    //console.log('this.allpatients', this.allpatients)
  })
}
}
