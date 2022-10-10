import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class HttpErrorIntercept implements HttpInterceptor {
  constructor(private router : Router,
    private authService : AuthService) {

  }
  intercept(
      request: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
      return next.handle(request)
          .pipe(
              retry(1),
              catchError((error: HttpErrorResponse) => {
                  let errorMessage = '';
                  if (error instanceof HttpErrorResponse) {
                      // client-side error
                      if (error.status == 0) {
                        errorMessage = 'Please check the network connection and try again.';
                      } else if (error.status === 401) {
                        this.authService.onLogOut();
                        this.router.navigate(['/login'])

                      }
                      errorMessage = `Error: ${error.error.message}`;
                  }  
                  
                  return throwError(() => errorMessage);
              })
          )
  }
}