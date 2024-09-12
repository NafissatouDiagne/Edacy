import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ApiService } from '../api.service';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [SidenavComponent,MatInput,CommonModule,FormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit {
  user:any;
  fileContent:any;
   dataApi={
lastname:'',
firstname:'',
phone:'',
email:'',
password:'',
confirmpass:'',
image:''
  }
  constructor(private _apiService:ApiService){}
ngOnInit(): void {
   this.getDataUser();
  // this.updateUser();
}
getDataUser(){
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
confirmpass:this.user.confirmpass,
image:this.fileContent
  }

},(error)=>{
 console.log('erreur lors de la recuperation du token ', error)
})

  }
}
onFileSelected(event: any) {
  const image: File = event.target.files[0];
  this.fileContent=image;
  // Vous pouvez maintenant faire ce que vous voulez avec le fichier sélectionné
}

openFileInput() {
  document.getElementById('fileInput')?.click();
}
updateUser(form:NgForm){
  const token = localStorage.getItem('token');

  if(token){
    this._apiService.updateUserData(this.dataApi,token).subscribe((response)=>{


      console.log(response.message)
      this.getDataUser()
    },(error)=>{
      console.log('error', error)
    })
  }
  else{
    console.log('Aucun donnee mise a jour')
  }

}

}
