import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

}
