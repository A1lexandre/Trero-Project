import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('close', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('open => close', [animate('0.5s ease-in')]),
    transition('close => open', [animate('0.5s ease-in')])
  ]),
  trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('5s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('5s', style({ opacity: 0 }))
    ])
  ]),
  trigger('openClose2', [
    state('true', style({ height: '*' })),
    state('false', style({ height: '0px' })),
    transition('false <=> true', animate(500))
  ]),
  trigger('openClose3', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('close', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    // ...
    transition('* => *', [
      animate('1s', keyframes ( [
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1,   offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ]))
    ])
  ]),
  trigger('flyInOut', [
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate('1s')
    ]),
    transition('* => void', [
      animate('1s', style({transform: 'translateX(100%)'}))
    ])
  ])
  ]
})
export class OpenCloseComponent implements OnInit {

  isOpen = true;
  isOpen2 = true;
  isOpen3 = true;

  isShown = true;

  showDiv = true;

  constructor() { }
   
   toggle() {
     this.isOpen = !this.isOpen;
   }

   toggle2() {
     this.isShown = !this.isShown;
   }

   toggle3() {
     this.isOpen2 = !this.isOpen2;
   }

   toggle4() {
     this.isOpen3 = !this.isOpen3;
   }


  ngOnInit() {
  }



}
