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

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Route pour le DashboardComponent à la racine
  { path: 'nav', component: NavbarComponent },
  {path:'side',component:SidenavComponent},
  {path:'chat',component:ChatComponent},
  {path:'user',component:UserprofileComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'maps',component:MapsComponent},
  { path: '**', redirectTo: '' } // Redirection vers le DashboardComponent si l'URL n'est pas reconnue
];
