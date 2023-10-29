import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.loadState();
    fromEvent(window, "storage").subscribe((event: StorageEvent)=>{
      if (event.key === "todos") this.loadState()
    })
  }
  getTodos() {
    return this.todos;
  }
  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveState()
  }
  updateTodo(id: string, updatedFields: Partial<Todo>) {
    let todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
    // todo = { ...todo, ...updatedFields };
    this.saveState()
  }
  deleteTodo(id: string) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index == -1) return;
    this.todos.splice(index, 1);
    this.saveState()
  }
  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  loadState() {
    try {
      const todosStorage = JSON.parse(localStorage.getItem('todos'));
      if (!todosStorage) return;
      this.todos.length = 0;
      this.todos.push(...todosStorage);
    } catch (e) {
      console.error(e);
    }
    // this.notes = notesStorage;
  }
}
