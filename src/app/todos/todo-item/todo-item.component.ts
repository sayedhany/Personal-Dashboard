import { TodoService } from './../../shared/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService, private route: Router) {}

  ngOnInit(): void {
    this.todo.completed = false;
  }
  onClick(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed });
  }
  onEditClick() {
    this.route.navigate(['todos', this.todo.id, 'edit']);
  }
  onDeleteClick() {
    this.todoService.deleteTodo(this.todo.id);
  }
}
