import { Component, OnInit ,ViewChild} from '@angular/core';
import {Artist} from '../service/artist.module'
import {AudioService} from '../service/audio.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

  constructor(private addArtist: AudioService) { }

  ngOnInit(): void {
  }

  submit(x: Artist){
    console.log(x)
  }

  @ViewChild('addartists', {static: false}) myForm: NgForm;

  create(artist: Artist){
    this.addArtist.createartist(artist);
    this.myForm.resetForm()
  }

}
