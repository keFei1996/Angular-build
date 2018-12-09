import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
      trigger('barLoad', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate('800ms ease-out')
        ])
      ])
    // trigger('openClose', [
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     height: '100px',
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   transition('*=>closed', [
    //     animate('1s')
    //   ]),
    //   transition('*=>open', [
    //     animate('0.5s')
    //   ]),
    //   transition('open <=> closed', [
    //     animate('0.5s')
    //   ]),
    //   transition ('* => open', [
    //     animate ('1s',
    //       style ({ opacity: '*' }),
    //     ),
    //   ]),
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('close', style({
    //     height: '100px',
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   // ...
    //   transition('* => *', [
    //     animate('1s', keyframes ( [
    //       style({ opacity: 0.1, offset: 0.1 }),
    //       style({ opacity: 0.6, offset: 0.2 }),
    //       style({ opacity: 1,   offset: 0.5 }),
    //       style({ opacity: 0.2, offset: 0.7 })
    //     ]))
    //   ])
    // ])
    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     style({ transform: 'translateX(-100%)' }),
    //     animate(100)
    //   ]),
    //   transition('* => void', [
    //     animate(100, style({ transform: 'translateX(100%)' }))
    //   ])
    // ])
    // trigger('myInsertRemoveTrigger', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('5s', style({ opacity: 1 })),
    //   ]),
    //   transition(':leave', [
    //     animate('5s', style({ opacity: 0 }))
    //   ])
    // ]),
  ]
})
export class AnimationsComponent implements OnInit {

  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }


}
