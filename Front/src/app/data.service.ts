import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Questao } from 'src/model/questao.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(sufix: string, params: any, headers: HttpHeaders) {
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    const options = { headers: headers };

    return this.httpClient
      .get(environment.chatUrl + sufix, options)
      .pipe(catchError(this.handleError));
  }

  public sendPostRequest(sufix: string, params: any, headers: HttpHeaders) : Observable<any> {
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let body = new FormData();
    body.append('id_usuario', '1');
    body.append('id_curso', '1');

    const options = { headers: headers };

    return this.httpClient
      .post(environment.chatUrl.concat(sufix), body)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Erro Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
