import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../dialogs/register-dialog/register-dialog.component';

export const USERS = 'USERS';
export const LOGGED_USER = 'LOGGED_USER';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser = null;

  constructor(private dialog: MatDialog) {}

  initializeSession() {
    try {
      const loggedUser =
        JSON.parse(window.localStorage.getItem(LOGGED_USER) as any) || false;
      if (!!loggedUser) {
        this.startSession(loggedUser);
      }
    } catch {}
  }

  startSession(user) {
    this.loggedUser = user;
    window.localStorage.setItem(LOGGED_USER, JSON.stringify(user));
  }

  loginUser(payload) {
    try {
      const users =
        (JSON.parse(window.localStorage.getItem(USERS) as any) as any[]) || [];
      const matchingUsers = users.filter(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (matchingUsers.length) {
        this.startSession(matchingUsers[0]);
      }
      return !!matchingUsers.length;
    } catch (e) {
      return false;
    }
  }

  registerUser(payload) {
    try {
      const users =
        (JSON.parse(window.localStorage.getItem(USERS) as any) as any[]) || [];
      const matchingUsers = users.filter((user) => {
        user.email === payload.email && user.password === payload.password;
      });
      if (!matchingUsers.length) {
        const newUser = { ...payload, balance: 0 };
        users.push(newUser);
        window.localStorage.setItem(USERS, JSON.stringify(users));
        this.startSession(newUser);
      }
      return !matchingUsers.length;
    } catch (e) {
      return false;
    }
  }

  logout() {
    this.loggedUser = null;
    window.localStorage.removeItem(LOGGED_USER);
  }

  updateLoggedUserBalance(amount: number) {
    const loggedUser = JSON.parse(
      window.localStorage.getItem(LOGGED_USER) as any
    );
    const users = JSON.parse(window.localStorage.getItem(USERS) as any);
    const updatedUser = {
      ...loggedUser,
      balance: loggedUser.balance + amount,
    };
    const updatedUsers = users.map((user) =>
      user.name === loggedUser.name ? loggedUser : user
    );

    window.localStorage.setItem(LOGGED_USER, JSON.stringify(updatedUser));
    window.localStorage.setItem(USERS, JSON.stringify(users));
    this.loggedUser = updatedUser;
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      height: '532px',
      width: '500px',
      disableClose: true,
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      height: '616px',
      width: '500px',
      disableClose: true,
    });
  }
}
