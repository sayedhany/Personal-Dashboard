import { TodoService } from './../../shared/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todo.completed = false;
  }
  onClick(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed });
  }
}
