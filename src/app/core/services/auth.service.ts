// import { SignalrService } from './signalr.service';
import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
import { WebStorageService } from './web-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private _appConfig: AppConfigurationService,
    private _webStorageService: WebStorageService,
    private router: Router
  ) {}

  public getToken(): string {
    let userData: any;
    userData = this._webStorageService.getData('user');
    return userData.access_token;
  }

  public getNotLoggedInToken(): string {
    let userNotLoggedIN: any;
    userNotLoggedIN = this._webStorageService.getData('userNotLoggedIN');
    return userNotLoggedIN.token;
  }

  /**For saving the user data */
  public onLogin(loginData: any): void {
    this._webStorageService.saveData('user', loginData.userData);
    this._webStorageService.saveData('masterData', loginData.masterData);
  }

  /**For remove the user data */
  public onLogOut(): void {
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/auth/login']);
  }

  /**Check for user is logged in or not */
  public isAuthenticated() {
    const userData = this._webStorageService.getData('user');
    if (userData.hasOwnProperty('token')) {
      return true;
    }
    return false;
  }

  
}
