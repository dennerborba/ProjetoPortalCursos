import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
=======
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./page/login/login.component";
import { CadastroUserComponent } from "./page/cadastro-user/cadastro-user.component";
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule, RouterOutlet, NavbarComponent],
=======
  imports: [RouterModule, LoginComponent, CadastroUserComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portalCursos';
}
