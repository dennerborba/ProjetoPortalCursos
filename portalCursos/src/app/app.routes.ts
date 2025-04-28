import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastroUserComponent } from './page/cadastro-user/cadastro-user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUserComponent },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
