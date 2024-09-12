import { Component } from '@angular/core';
import { MatCardModule ,MatCardHeader,MatCardTitle} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroupDirective,
  NgForm,

  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardHeader,MatCardModule,CommonModule,
    MatCardTitle,MatFormField,MatInputModule,
    FormsModule,  ReactiveFormsModule,MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  dataApi={
   lastname: '',
   firstname: '',
   phone: '',
   email:'',
   password: '',
   confirmpass: '',
  }

  constructor(private apiService:ApiService,private _snackbar:MatSnackBar,private router:Router){}
  message='';
submitForm(form:NgForm){
if(form){
  this.dataApi={
    lastname:form.value.lastname,
    firstname:form.value.firstname,
    phone:form.value.phone,
    email:form.value.email,
    password:form.value.password,
    confirmpass:form.value.confirmpass


}
this.apiService.postRegister(this.dataApi).subscribe(
  (response)=>{
    this.message='Utilisateur ajouter avec succes';
    this.snackBar();
    /*this.dataApi={
      username: '',
       email:'',
      password: ''
     }*/
console.log(this.message,response)
  },
  (error)=>{
    console.log('dataApi:',this.dataApi)
    this.message='Erreur lors de l\'insertion des donnees';
    this.snackBar();

console.log(this.message,error)
  }
)
}
else{
this.message='Formulaire invalid';
this.snackBar();

console.log(this.message)
console.log('this.dataApi', this.dataApi)
}
}
snackBar(){
  this._snackbar.open(this.message,'X')
}
Sign(){
  this.router.navigate(['/login']);
}
}
