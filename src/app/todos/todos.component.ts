import { animate, style, transition, trigger } from '@angular/animations';
import { Todo } from '../shared/todo.model';
import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger("todoItemAnim",[
      transition(":leave",[
        animate(200,style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))

      ])
    ])
  ]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
  trackById(index, item:Todo){
    return item.id
  }
}
