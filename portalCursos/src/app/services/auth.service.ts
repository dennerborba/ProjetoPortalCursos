import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
}

export interface CadastroRequest {
  nome: string;
  email: string;
  senha: string;
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  usuarioLogado = false;
  nomeUsuario = '';

  constructor(private http: HttpClient ) { }

  // cadastrar(dados: CadastroRequest): Observable<any> {
  //   const urlCadastro = `${this.apiUrl}/cadastro`;
  //   return this.http.post<any>(urlCadastro, dados);
  // }
  cadastrar(dados: CadastroRequest): Observable<any> {
    const urlCadastro = `${this.apiUrl}/cadastro`;
    return this.http.post<any>(urlCadastro, dados).pipe(
      catchError(error => {
        console.error('Erro no cadastro:', error); 
        return throwError(() => error); 
      })
    );
  }

  // login(dados : LoginRequest) : Observable<LoginResponse> {
  //   const urlLogin = `${this.apiUrl}/login`;
  //   return this.http.post<LoginResponse>(urlLogin, dados).pipe(
  //     tap((response) => {
  //       this.nomeUsuario = dados.email;
  //       this.usuarioLogado = true;
  //       localStorage.setItem('token', response.token);
  //     })
  //   );
  // }
  login(dados: LoginRequest): Observable<LoginResponse> {
    const urlLogin = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(urlLogin, dados).pipe(
      tap((response) => {
        this.nomeUsuario = dados.email;
        this.usuarioLogado = true;
        localStorage.setItem('token', response.token);
      }),
      catchError((error) => {
        console.error('Erro no login:', error); 
        return throwError(() => error); 
      })
    );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null
  }

  logout(): void {
    this.nomeUsuario = '';
    this.usuarioLogado = false;
    localStorage.removeItem('token');
  }

}
