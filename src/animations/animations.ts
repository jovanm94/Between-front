// import the required animation functions from the angular animations module
import { trigger, animate, transition, style } from '@angular/animations';

export const fadeOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeOutAnimation', [
    transition('* => void', [
      style({
        opacity: 1,
        transform: 'translateX(0)',
      }),
      animate(500, style({
        opacity: 0,
        transform: 'translateX(100px) scale(0.8)'
      }))
    ])
  ]);

export const fadeInAndOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAndOutAnimation', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(600, style({
        opacity: 1,
        transform: 'translateX(0) scale(1.2)',
      }))
    ]),

    transition('* => void', [
      style({
        opacity: 1,
        transform: 'translateX(0)',
      }),
      animate(500, style({
        opacity: 0,
        transform: 'translateX(100px) scale(0.8)'
      }))
    ])
  ]);
