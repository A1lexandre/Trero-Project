import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/services/user/user.service';
import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private userService: UserService, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  // retorna uma mensagem de erro caso o campo tenha sido tocado e esteja inválido
  verificaErros(campo) {
    switch(campo.name) {
      case 'passwordConfirmation': 
        return campo.touched && campo.value=="";
        break;
      default: return campo.touched && campo.invalid;
    }

  }

  // retorna uma mensagem de erro caso os valores dos campos de senha não sejam iguais
  verificaSenha(campo1, campo2) {
    return !this.verificaErros(campo2) && (campo1.value !== campo2.value) && campo2.touched;
  }

  // aplica o estilo ao campo quando este está inválido (utiliza cor vermelha)
  aplicaErrorStyle(campo) {
    return {'is-invalid': this.verificaErros(campo)}
  }

  submit(f) {
    this.userService.createUser(f.value)
    .subscribe(
      (data: any) => {
        this.authService.setData(data);
        this.router.navigate(['']);
      }
    );
  }

}
