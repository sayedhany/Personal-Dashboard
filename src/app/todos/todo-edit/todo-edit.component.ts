import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoSrv: TodoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      const id = p['id'];
      this.todo = this.todoSrv.getTodo(id);
      console.log(this.todo);
    });
  }
}
