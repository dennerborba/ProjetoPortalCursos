import { Component, Input } from '@angular/core';
import { CursoRequest, CursoService } from '../../services/curso.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-meus-cursos',
  standalone: true,
  imports: [],
  templateUrl: './meus-cursos.component.html',
  styleUrl: './meus-cursos.component.css'
})
export class MeusCursosComponent {
  @Input() title: string = 'Meus Cursos' 

  cursoRequest: CursoRequest = {
    id: 0,
    nome_Curso: '',
    descricao: '',
    instrutor: '',
    urlImagem: ''
  }

  cursos: CursoRequest[] = []

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.meusCursos()
  }

  meusCursos() {
    this.cursoService.getCursosUser().subscribe({
      next: cursos => {
        this.cursos = cursos
      },
      error: (erro) => {
        alert('Erro ao carregar os cursos do usuário!')
        console.log(erro.message)
      }
    })
  }

}
