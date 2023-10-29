import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];
  storageListenSub: Subscription;
  constructor() {
    this.loadState();
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      console.log(event.key, "key");
      
      if (event.key === 'notes') {
        console.log("gired");
        
        this.loadState();
      }
    });
  }
  getNotes() {
    return this.notes.slice();
  }
  /**
   * Retrieves a note from the collection based on its id.
   *
   * @param {string} id - The id of the note to retrieve.
   * @return {Note | undefined} The note with the matching id, or undefined if no note is found.
   */
  getNote(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }
  addNote(note: Note) {
    this.notes.push(note);
    this.saveState();
  }
  updateNote(id: string, updatedFields: Partial<Note>) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    this.notes[noteIndex] = { ...this.notes[noteIndex], ...updatedFields };
    this.saveState();
  }
  deleteNode(id: string) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex, 1);
    this.saveState();
  }
  saveState() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  loadState() {
    try {
      const notesStorage = JSON.parse(localStorage.getItem('notes'));
      if (!notesStorage) return;
      this.notes.length = 0;
      this.notes.push(...notesStorage);
    } catch (e) {
      console.error(e);
    }
    // this.notes = notesStorage;
  }
  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }
}
