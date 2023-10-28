
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationData } from '../shared/notification-data.model';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger("notificationAnim",[
      transition(":enter",[
        style({
          opacity: 0,
          transform: "translateY(5px)"
        }),
        animate("150ms 125ms ease-out")
      ]),
      transition(":leave",[
        animate(125, style({
          opacity: 0,
          transform: "translateY(5px)"
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit{
  message: NotificationData[];
  timeout: any;
  constructor(private notificationSrv: NotificationService) {}

  ngOnInit(): void {
    this.notificationSrv.notifications.subscribe((notification: NotificationData)=>{
      this.message = Array(notification);
      clearTimeout(this.timeout);
      
      this.timeout = setTimeout(()=>{
        this.message = null;
        // console.log("worked");
      },notification.duration)
    })
  }
  

}
