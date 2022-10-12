import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly _apiService: ApiService) {}

  public onLogin = (dataToSend :any)=> {
    return this._apiService.post('/oauth/token', dataToSend);
  };
}
