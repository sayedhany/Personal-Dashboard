import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../shared/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  constructor(private todoService: TodoService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit(value: any) {
    console.log(value);
    const newTodo = new Todo(value.text);
    this.todoService.addTodo(newTodo);
    this.route.navigate(['todos']);
  }
}
