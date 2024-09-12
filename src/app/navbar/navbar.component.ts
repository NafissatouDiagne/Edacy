import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user:any;
constructor(private apiService:ApiService){}
  ngOnInit(): void {
      // Récupérer le token JWT du localStorage
      const token = localStorage.getItem('token');
      console.log('token1', token)
      if (token) {
        // Utilisation du token pour récupérer les informations de l'utilisateur
        this.apiService.getUserData(token).subscribe(
          (response) => {
            // Stockage des informations de l'utilisateur dans la variable user
            this.user = response.user;
            console.log('this.user', this.user)
          },
          (error) => {
            console.log('token', token)
            console.error('Erreur lors de la récupération des données utilisateur :', error);
          }
        );
      } else {
        console.error('Aucun token JWT trouvé dans le localStorage');
      }
    }
}

