import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  constructor(private route: Router, private notesSrv: NoteService, private notificationSrv: NotificationService) {}

  ngOnInit(): void {}
  onSubmit(value: any) {
    console.log(value);
    const newNode = new Note(value.title, value.content);
    this.notesSrv.addNote(newNode);
    this.route.navigate(['notes']);
    
this.notificationSrv.show("Created Note")
  }
}
