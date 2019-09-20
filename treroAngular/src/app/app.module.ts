import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CurriculumModule } from './curriculum/curriculum.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import { MatchedPasswordDirective } from './shared/matched-password.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    CadastroComponent,
    CampoControlErroComponent,
    MatchedPasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurriculumModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
