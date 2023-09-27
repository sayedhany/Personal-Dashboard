import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './bookmarks/edit-bookmark/edit-bookmark.component';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoEditComponent,
    AddBookmarkComponent,
    EditBookmarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
