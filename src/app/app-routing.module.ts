import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddArtistComponent} from './add-artist/add-artist.component'
import {AddSongComponent} from './add-song/add-song.component'
import {AddplayistComponent} from './addplayist/addplayist.component'

const routes: Routes = [
  { path: 'addartist', component: AddArtistComponent },
  { path:'addsongs',component:AddSongComponent },
  { path:'addplaylist',component:AddplayistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
