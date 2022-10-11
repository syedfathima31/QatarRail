import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Params } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiURL = environment.apiUrl;
  constructor(private http: HttpClient,) {
   }


  post(path:string ,data: any): Observable<any> {
    return this.http.post(`${this.apiURL}${path}`,JSON.stringify(data))
    .pipe(
      catchError(this.handleError)
    );
  }


  put(path:string,data: any): Observable<any> {
    return this.http.put(`${this.apiURL}${path}`,JSON.stringify(data))
    .pipe(
      catchError(this.handleError)
    );
  }

  getAll(path:string,params:Params): Observable<any> {
    //this.httpOptions['params'] = params;
    return this.http.get(`${this.apiURL}${path}`,{params :params})
    .pipe(
     catchError(this.handleError)
    );
  }
  

  get(path:string): Observable<any> {
    return this.http.get(`${this.apiURL}${path}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(path:string): Observable<any> {
    return this.http.delete(`${this.apiURL}${path}`)
    .pipe(
      catchError(this.handleError)
    );
  }



  
  // Error handling
  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }

}
