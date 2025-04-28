import { Component, Input } from '@angular/core';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoCardComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursosApi: any

  @Input() title: string = 'Diversos cursos de tecnologia para você se inscrever gratuitamente!'

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos()
  }

  getCursos() {
    this.cursoService.getCursos().subscribe({
      next: (response) => {
        this.cursosApi = response
        console.log(this.cursosApi)
      },
      error: (erro) => {
        alert('correu um erro ao buscar os cursos na api -> /api/cursos')
        console.log(`Ocorreu um erro ao realizar a requisição: ${erro}`)
      }
    })
  }
}
