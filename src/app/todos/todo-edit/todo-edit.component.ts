import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  text: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private route: Router,
    private notificationSrv: NotificationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      const id = p['id'];
      this.todo = this.todoService.getTodo(id);
      console.log(this.todo);
      this.text = this.todo.text;
    });
  }
  onSubmit(value: any) {
    console.log(value);
    this.todoService.updateTodo(this.todo.id, {text: this.text})
    this.route.navigate(['todos']);
    this.notificationSrv.show("Edited Todo")
    
  }
}
