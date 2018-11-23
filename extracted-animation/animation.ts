import { state,animate,trigger,style,transition, keyframes } from '@angular/animations';


export let fade = trigger('fade', [

    state('void',style({backgroundColor: 'yellow', opacity: 0})),

    transition(':enter',[
      style({transform:'translateX(-100%)'}),
      animate(2000)
    ]),

    transition(':leave',[
      animate('2s cubic-bezier(.17,.67,.77,.22)',keyframes([
        style({
            backgroundColor: 'red',
            offset: .2,
            opacity: 1,
            transform: 'translateX(200px)'
        }),

        style({
            backgroundColor: 'red',
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
      ]))   
    ])
  ]);
