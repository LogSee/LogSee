import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    // Slide off right
    transition(':increment', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity: '0'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease', style({ left: '-100%', opacity: '0'}))
        ]),
        query(':enter', [
          animate('500ms ease', style({ left: '0%', opacity: '1'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    // slide off lef
    transition(':decrement', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity: '0'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease', style({ left: '100%', opacity: '0'}))
        ]),
        query(':enter', [
          animate('500ms ease', style({ left: '0%', opacity: '1'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);