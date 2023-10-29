import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[] = [];
  storageListenSub: Subscription;
  constructor() {
    this.loadState();
    this.storageListenSub = fromEvent(window, "storage").subscribe((event: StorageEvent)=>{
      if (event.key === "bookmarks") this.loadState();
    })
   }
  getBookmarks(){
    return this.bookmarks;
  }
  getBookmark(id: string){
    return this.bookmarks.find(b => b.id === id)
  }
  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark)
    this.saveState();
  }
  updateBookmark(id: string, updatedFields: Partial<Bookmark>){
    const bookmark =  this.getBookmark(id);
    Object.assign(bookmark, updatedFields)
    this.saveState();
  }
  deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex === -1) return
    this.bookmarks.splice(bookmarkIndex, 1);
    this.saveState();
  }
  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
  loadState() {
    try {
      const bookmarksStorage = JSON.parse(localStorage.getItem('bookmarks'));
      if (!bookmarksStorage) return;
      this.bookmarks.length = 0;
      this.bookmarks.push(...bookmarksStorage);
    } catch (e) {
      console.error(e);
    }
    // this.notes = notesStorage;
  }
  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }
}
