import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ConsultNoteComponent } from './consult-note/consult-note.component';
import { LicenseNoteComponent } from './license-note/license-note.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'edit-note', component: EditNoteComponent},
  {path: 'consult-note', component: ConsultNoteComponent},
  {path: 'consult-note/license', component: LicenseNoteComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
