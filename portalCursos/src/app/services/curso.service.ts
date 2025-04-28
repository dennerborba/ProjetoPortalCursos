import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CursosComponent } from '../components/cursos/cursos.component';

export interface CursoRequest {
  id: number,
  nome_curso: string,
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
}
