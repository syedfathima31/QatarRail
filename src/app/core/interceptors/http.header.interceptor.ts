import {
    HttpHandler,
    HttpRequest,
    HttpInterceptor,
    HttpHeaders
  } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { AuthService } from '../services/auth.service';
  import { Injectable } from '@angular/core';
  @Injectable({ providedIn: 'root' })
  export class HttpHeaderIntercept implements HttpInterceptor {
    constructor(private router : Router,
      private authService : AuthService) {
  
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from the service.
        const authToken = this.authService.getToken();
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        });
    
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({headers});
    
        // send cloned request with header to the next handler.
        return next.handle(authReq);
      }
  }