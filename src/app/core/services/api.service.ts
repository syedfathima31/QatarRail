import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Params } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient,
    private authService : AuthService) { }

  private apiURL = environment.apiUrl;
  private token = this.authService.getToken();


  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    }),
    params : {

    }
  };


  post(path:string ,data: any): Observable<any> {
    return this.http.post(`${this.apiURL}${path}`,JSON.stringify(data),this.httpOptions)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  put(path:string,data: any): Observable<any> {
    return this.http.put(`${this.apiURL}${path}`,JSON.stringify(data),this.httpOptions)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAll(path:string,params:Params): Observable<any> {
    this.httpOptions['params'] = params;
    return this.http.get(`${this.apiURL}${path}`,this.httpOptions)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  

  get(path:string): Observable<any> {
    return this.http.get(`${this.apiURL}${path}`,this.httpOptions)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  delete(path:string): Observable<any> {
    return this.http.delete(`${this.apiURL}${path}`,this.httpOptions)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }



  
  // Error handling
  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }

}
