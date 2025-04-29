import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastroUserComponent } from './page/cadastro-user/cadastro-user.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MeusCursosComponent } from './page/meus-cursos/meus-cursos.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'cadastro', component: CadastroUserComponent },

  { path: 'cursos', component: CursosComponent },

  { path: 'meus-cursos', component: MeusCursosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

