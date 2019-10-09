import { Component, OnInit} from '@angular/core';

import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean;
  userName: string;

  constructor(private authService: AuthService) {
   }

  ngOnInit() {

    this.authService.isAuthenticated()
    .subscribe(logged => {
      this.isLoggedIn = logged;
      if (logged) {
        let user = JSON.parse(this.authService.getUser());
        this.userName = user.name;
      }
    });

    this.authService.emitState();

  }

  logout() {
    this.authService.logout()
    .subscribe(msg => {
      console.log(msg);
      this.authService.revokeAuth();
    })
  }

}
