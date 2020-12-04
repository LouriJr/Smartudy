import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Resposta } from 'src/model/resposta.model';

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

  public async RetornarQuestaoAtual() {
    let body = new FormData();
    body.append('id_usuario', '1');
    body.append('id_curso', '1');

    var sufix = 'questionario/retornarQuestaoAtual';

    var response = await this.httpClient
      .post(environment.chatUrl.concat(sufix), body)
      .pipe(catchError(this.handleError))
      .toPromise();

    return JSON.parse(JSON.stringify(response));
  }

  public async ResponderQuestao(resposta: Resposta, id_questao: string) {
 
    const options: {
      headers?: HttpHeaders;
      observe?: 'body';
      params?: HttpParams;
      reportProgress?: boolean;
      responseType: 'json';
      withCredentials?: boolean;
    } = {
      responseType: 'json',
    };

    let body = new FormData();

    body.append('id_usuario', '1');
    body.append('id_curso', '1');
    body.append('id_resposta', resposta.id_resposta);
    body.append('id_questao', id_questao);

    var sufix = 'questionario/responderQuestao';

    var response = await this.httpClient
      .post(environment.chatUrl.concat(sufix), body, options)
      .pipe(catchError(this.handleError))
      .toPromise();

    return JSON.parse(JSON.stringify(response));
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
