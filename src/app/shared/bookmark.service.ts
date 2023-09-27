import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[];
  constructor() {
    this.bookmarks = [
    new Bookmark("Google", "https://www.google.com/favicon.ico"),
    new Bookmark("twitter", "https://www.twitter.com/favicon.ico"),
    new Bookmark("Wiki", "https://wikipedia.org/favicon.ico")
    ]
   }
  getBookmarks(){
    return this.bookmarks;
  }
  getBookmark(id: string){
    return this.bookmarks.find(b => b.id === id)
  }
  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark)
  }
  updateBookmark(id: string, updatedFields: Partial<Bookmark>){
    const bookmark =  this.getBookmark(id);
    Object.assign(bookmark, updatedFields)
  }
  deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex === -1) return
    this.bookmarks.splice(bookmarkIndex, 1);
  }
}
