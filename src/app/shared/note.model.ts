import { v4 as uuidv4 } from 'uuid';
export class Note {
  id: string;
  // title: string;
  // content: string;
  constructor(public title: string, public content: string) {
    this.id = uuidv4();
    console.log(this.id, this.title, this.content, 'from constructor');
  }
}
