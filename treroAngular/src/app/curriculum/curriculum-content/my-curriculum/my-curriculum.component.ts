import { Component, OnInit } from '@angular/core';
import { transition, trigger, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-my-curriculum',
  templateUrl: './my-curriculum.component.html',
  styleUrls: ['./my-curriculum.component.css'],
  animations: [
    trigger('pageIn', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0 }), // o estilo antes dos componentes entrarem na view
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class MyCurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
