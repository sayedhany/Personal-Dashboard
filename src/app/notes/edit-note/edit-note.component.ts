import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/shared/note.service';
import { Note } from 'src/app/shared/note.model';
import { NotificationService } from 'src/app/shared/notification.service';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note: Note;
  id: string;
  title;
  content;
  constructor(
    private router: ActivatedRoute,
    private nodesSrv: NoteService,
    private route: Router,
    private notificationSrv: NotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.note = this.nodesSrv.getNote(this.id);
    this.title = this.note.title;
    this.content = this.note.content;
  }
  onSubmit(value: any) {
    this.nodesSrv.updateNote(this.id, value);
    this.route.navigate(['notes']);
    
    this.notificationSrv.show("Edited Note")
  }
  onDelete() {
    this.nodesSrv.deleteNode(this.id);
    this.route.navigate(['notes']);
    this.notificationSrv.show("Removed Note")
  }
}
