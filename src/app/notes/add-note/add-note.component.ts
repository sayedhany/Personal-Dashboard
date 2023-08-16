import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  onSubmit(value: any) {
    console.log(value);
    this.route.navigate(['notes']);
  }
}
