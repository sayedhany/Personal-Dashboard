import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ background: 'wheat', display: 'block' }),
            animate(1000, style({ background: '*' })),
          ],
          {
            optional: true,
          }
        ),
        style({
          background: 'blue',
        }),
        animate(
          1000,
          style({
            background: 'red',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'personal-dashvoard';
  time: string;
  date: string;

  /**
   * Initializes the component and sets the current time and date.
   *
   * @param {void} None
   * @return {void} None
   */
  ngOnInit() {
    this.time = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
    this.date = new Date().toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    console.log(this.date);
  }
  preparRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url;
    }
  }
}
