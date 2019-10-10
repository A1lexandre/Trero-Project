import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CurriculumModule } from './curriculum/curriculum.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import { MatchedPasswordDirective } from './shared/matched-password.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    CadastroComponent,
    CampoControlErroComponent,
    MatchedPasswordDirective,
    NavbarComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CurriculumModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
