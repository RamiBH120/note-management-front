import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note:any;

  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.note = this.noteService.getNotes();
  }

}
