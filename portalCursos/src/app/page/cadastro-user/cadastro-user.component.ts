import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Mesmo service
import { CadastroRequest } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms'; // Opcional aqui, não usado diretamente

@Component({
  selector: 'app-cadastro-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-user.component.html',
  styleUrl: './cadastro-user.component.css'
})
export class CadastroUserComponent {
  cadastroRequest: CadastroRequest = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  cadastrar(form: any) {
    if (form.invalid) {
      alert('Preencha todos os campos');
      return;
    }

    this.authService.cadastrar(this.cadastroRequest).subscribe({
      next: (response) => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['']);
      },
      error: (error) => {
        alert('Erro ao cadastrar usuário.');
      }
    });
  }
}
