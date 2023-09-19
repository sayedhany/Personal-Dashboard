import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [new Todo('watching film'), new Todo('finish course')];
  }
  getTodos() {
    return this.todos;
  }
  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  updateTodo(id: string, updatedFields: Partial<Todo>) {
    let todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
    // todo = { ...todo, ...updatedFields };
  }
  deleteTodo(id: string) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index == -1) return;
    this.todos.splice(index, 1);
  }
}
