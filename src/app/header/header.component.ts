import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'backdrop-blur',
  },
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  get loggedUser() {
    return this.authService.loggedUser;
  }

  openLoginDialog() {
    this.authService.openLoginDialog();
  }

  openRegisterDialog() {
    this.authService.openRegisterDialog();
  }
}
