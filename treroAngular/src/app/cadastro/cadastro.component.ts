import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: any = {
    nome: null
  }

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
    console.log(this.usuario.nome);
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

}
