import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './bookmarks/edit-bookmark/edit-bookmark.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tabNumber: 1 } },
  { path: 'todos', component: TodosComponent, data: { tabNumber: 2 } },
  { path: 'notes', component: NotesComponent, data: { tabNumber: 3 } },
  { path: 'notes/add', component: AddNoteComponent, data: { tabNumber: 4 } },
  {
    path: 'notes/:id/edit',
    component: EditNoteComponent,
    data: { tabNumber: 5 },
  },
  { path: 'todos/add', component: TodoAddComponent, data: { tabNumber: 6 } },
  {
    path: 'todos/:id/edit',
    component: TodoEditComponent,
    data: { tabNumber: 7 },
  },
  { path: 'bookmarks/add', component: AddBookmarkComponent, data: { tabNumber: 7 }},
  { path: 'bookmarks/:id/edit', component: EditBookmarkComponent, data: { tabNumber: 8 }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
