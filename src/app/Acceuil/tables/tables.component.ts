import { PAtients } from './../../patients';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent  implements OnInit{
  allpatients:any=[]
  filteredpatient=this.allpatients;
  search:string='';

  ngOnInit(): void {
 this.getAllPatient()

}
constructor(private apidata:ApiService){}
getAllPatient(){
  this.apidata.getPatients().subscribe((response)=>{
    this.allpatients= response.getpatients;
    this.filtered();
  })
}


filtered(){
  console.log('allpatients:', this.allpatients)

  this.filteredpatient= this.allpatients.slice().filter((patient:any) =>{
    return patient.fullname && patient.fullname.toLowerCase().includes(this.search.toLowerCase())})
}
}
