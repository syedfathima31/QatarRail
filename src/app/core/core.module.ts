import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorIntercept } from './interceptors/http.error.interceptor'
import { ApiService } from './services/api.service';
import { AuthService} from './services/auth.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorIntercept,
      multi: true
    },
    ApiService,
    AuthService
  ],
  exports: []
})
export class CoreModule { }
