import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[];
  constructor() {}
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
  }
  updateNote(id: string, updatedFields: Partial<Note>) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    this.notes[noteIndex] = { ...this.notes[noteIndex], ...updatedFields };
  }
  deleteNode(id: string) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex, 1);
  }
}
