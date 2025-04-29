import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { CursosComponent } from '../components/cursos/cursos.component';

export interface CursoRequest {
  id: number,
  nome_Curso: string,
  descricao: string,
  instrutor: string,
  urlImagem: string
}

export interface CursoResponse {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = `${environment.apiUrl}/cursos`
  constructor(private http: HttpClient) { }

  getCursos(): Observable<CursosComponent[]> {
    return this.http.get<CursosComponent[]>(this.apiUrl)
  }

  getCursosUser(): Observable<CursoRequest[]> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('token', token || '')

    return this.http.get<CursoRequest[]>(`${this.apiUrl}/meus-cursos`, {headers})
  } 

  inscrever(curso: CursoRequest): Observable<CursoResponse> {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Usuário não está logado!')
      return throwError(()=> new Error('Usuário não autenticado!'))
    }
    const headers = new HttpHeaders().set('token', token)
    
    return this.http.post<CursoResponse>(`${this.apiUrl}/${curso.id}/inscrever`, null, {headers})
  }
}
