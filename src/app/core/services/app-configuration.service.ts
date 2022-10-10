import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {
  constructor() {}

  static regExp = {
    // tslint:disable-next-line:max-line-length
    email: /(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-])+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
  };
  public storageKeyPrefix = 'QRAIL_';
  public localStorage = true; // default is local storage for session storage use value as false

  
}
