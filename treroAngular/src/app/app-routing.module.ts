import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { CurriculumListComponent } from './curriculum/curriculum-list/curriculum-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, 
    canActivate: [AuthGuard] },
  { path: 'curricula', component: CurriculumListComponent},
  { path: 'cadastro', component: CadastroComponent,
    canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
