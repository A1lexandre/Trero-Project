import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() msg: string;
  @Input() mostraErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
