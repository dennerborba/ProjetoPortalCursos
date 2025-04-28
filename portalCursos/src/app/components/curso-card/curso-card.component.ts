import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  imports: [],
  templateUrl: './curso-card.component.html',
  styleUrl: './curso-card.component.css'
})
export class CursoCardComponent {
  @Input() nome_curso: string = ''
  @Input() descricao: string = ''
  @Input() instrutor: string = ''
  @Input() urlImagem: string = ''
}
