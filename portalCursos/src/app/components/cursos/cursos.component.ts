import { Component, Input } from '@angular/core';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { CursoService } from '../../services/curso.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoCardComponent, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursosApi: any

  @Input() title: string = 'Diversos cursos de tecnologia para você se inscrever gratuitamente!'

  constructor(private cursoService: CursoService, private authService: AuthService, private router: Router) { }

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

  inscrever(curso: any) {
    if (this.authService.isLoggedIn()) {
      this.cursoService.inscrever(curso).subscribe({
        next: (response) => {
          alert('Inscrição realizada!')
          console.log(response)
        },
        error: (erro) => {
          alert('Houve um erro ao se inscrever')
          console.log(erro.message)
        }
      })
    } else {
      this.router.navigate(['/login'])
    }
  }
}
