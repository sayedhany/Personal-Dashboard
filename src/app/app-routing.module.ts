import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tabNumber: 1 } },
  { path: 'todos', component: TodosComponent, data: { tabNumber: 2 } },
  { path: 'notes', component: NotesComponent, data: { tabNumber: 3 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
