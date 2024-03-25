import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ApiService } from '../api.service';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [SidenavComponent,MatInput,CommonModule,FormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit {
  user:any;
   dataApi={
lastname:'',
firstname:'',
phone:'',
email:'',
password:'',
confirmpass:''
  }
  constructor(private _apiService:ApiService){}
ngOnInit(): void {
    const token= localStorage.getItem('token');

    if(token){
  this._apiService.getUserData(token).subscribe((response)=>{
    this.user=response.user;
    this.dataApi={
  lastname:this.user.lastname,
  firstname:this.user.firstname,
  phone:this.user.phone,
  email:this.user.email,
  password:this.user.password,
  confirmpass:this.user.confirmpass
    }

  },(error)=>{
   console.log('erreur lors de la recuperation du token ', error)
  })
    }
}

}
