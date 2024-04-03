import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, FormGroupDirective,ReactiveFormsModule, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ApiService } from '../api.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormField,ReactiveFormsModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
constructor(private _login:Router,private apiService:ApiService,private _snackBar:MatSnackBar){}
dataApi={
  email:'',
  password:''
}
message=''
submitForm(form:NgForm){
  if (form && form.value && form.value.email && form.value.password){
  this.dataApi={
    email:form.value.email,
    password:form.value.password
  }
  this.apiService.postLogin(this.dataApi).subscribe((response )=> {
    this.message=response.message
    this.MessagesSnack()
    this.getAllUser(this.dataApi.email,response.token);

   console.log(this.message,response)
  },
    (error)=>{
      this.message=error.error.message
    this.MessagesSnack()

console.log(this.message,error)

    }
    );

}else{
this.message="Formulaire invalide";
this.MessagesSnack()

console.log(this.message)
}
}

ConnectionReussie(user:any){
  this._login.navigate(['/dashboard'],{ state: { user: user } })
}
getAllUser(email: any,token:any) {
  this.apiService.getRegister().subscribe((response) => {
    if (response && response.user && Array.isArray(response.user)) {
      response.user.forEach((user:any) => {
        if (user.email === email) {
          console.log('User found:', user);
          localStorage.setItem('token',token)
          this.ConnectionReussie(user)
          // Do whatever you need to do with the user here
        }
      });
    }
  });
}



Sign(){
  this._login.navigate(['/register'])
}
MessagesSnack(){const horizontalPosition: MatSnackBarHorizontalPosition = 'end'; // Position horizontale
const verticalPosition: MatSnackBarVerticalPosition = 'top'; // Position verticale

this._snackBar.open(this.message, 'X', {
  horizontalPosition: horizontalPosition,
  verticalPosition: verticalPosition,
});
}
}
