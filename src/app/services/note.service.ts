import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note = {
    id: 0,
    name: "exmpl",
    type: ".type",
    size: 0.023
  };

  notes: [];
  constructor() { }

  getNotes(){
    return this.note
  }
}
