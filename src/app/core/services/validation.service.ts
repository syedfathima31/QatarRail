import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {
  constructor() {}

  /** Email Validator */
  static emailValidator(control:any) {
    if (control.value) {
      if (
        control.value.toLowerCase().match(AppConfigurationService.regExp.email)
      ) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
  }
  /** Password Validator */
  // tslint:disable-next-line:member-ordering
  static passwordValidator(control:any) {
    if (control.value) {
      if (control.value.match(AppConfigurationService.regExp.password)) {
        return null;
      } else {
        return { invalidPassword: true };
      }
    }
  }

  }
