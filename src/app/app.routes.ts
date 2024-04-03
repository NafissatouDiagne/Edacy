import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Assurez-vous d'importer correctement le composant DashboardComponent
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChatComponent } from './Chats/chat/chat.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterComponent } from './register/register.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { PageAcceuilComponent } from './Acceuil/page-acceuil/page-acceuil.component';
import { PersonnelComponent } from './Acceuil/personnel/personnel.component';
import { MedecinComponent } from './Acceuil/medecin/medecin.component';

export const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  { path: 'login', component: LoginComponent }, // Route pour le LoginComponent à la racine
  { path: 'nav', component: NavbarComponent },
  {path:'personel',component:PersonnelComponent},
  {path:'side',component:SidenavComponent},
  {path:'medecin',component:MedecinComponent},
  {path:'chat',component:ChatComponent},
  {path:'user',component:UserprofileComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:PageAcceuilComponent},
  {path:'login',component:LoginComponent},
  {path:'maps',component:MapsComponent},
  { path: '**', redirectTo: '/dashboard' } // Redirection vers le dashComponent si l'URL n'est pas reconnue
];
