import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { group } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routAnim', [
      transition(':increment', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
        group([
          query(':leave', [
            animate(
              '200ms ease-in',
              style({ opacity: 0, transform: 'translateX(80px)' })
            ),
          ]),
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-80px)',
            }),
            animate(
              '200ms 100ms ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
      transition(':decrement', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
        group([
          query(':leave', [
            animate(
              '200ms ease-in',
              style({ opacity: 0, transform: 'translateX(-80px)' })
            ),
          ]),
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(80px)',
            }),
            animate(
              '200ms 100ms ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger("bgAnim",[
      transition(":leave",[
        animate(1000,style({
          opacity: 0
        }))
      ])
    ]),
    trigger("fadeAnim",[
      transition(":enter",[
        style({opacity: 0}),
        animate(250, style({opacity: 1}))
      ]),
      transition(":leave",[
        animate(250, style({opacity: 0}))
      ]),
    ])
  ],
})
export class AppComponent {
  title = 'personal-dashvoard';
  time: string;
  date: string;
  backgrounds: string[] = ["https://source.unsplash.com/random/1920x1080"
]
  showBtn: Boolean = true;
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
  /**
   * Retrieves the snapshot URL from the activated route of the given RouterOutlet.
   *
   * @param {RouterOutlet} outlet - The RouterOutlet object to retrieve the snapshot URL from.
   * @return {SnapshotUrl[]} - An array containing the snapshot URL.
   */
  preparRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRouteData['tabNumber'];
    }
  }
  async changeBGImage(){
    this.showBtn = true;
    const res = await fetch("https://source.unsplash.com/random/1920x1080",{
      method: 'HEAD'
    });
    const alreadyGot = this.backgrounds.includes(res.url);
    if(alreadyGot){
      return this.changeBGImage();
    }
    this.backgrounds.push(res.url);
    
    
  }
  onBGImageLoad(imgEvent: Event){
    const imgElement = imgEvent.target as HTMLImageElement;
    const src = imgElement.src
    console.log(imgElement, src);
    this.backgrounds = this.backgrounds.filter(b=> b === src)
    this.showBtn = false
  }
}
