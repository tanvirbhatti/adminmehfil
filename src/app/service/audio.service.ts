import { Injectable } from '@angular/core';
import {Artist} from "./artist.module"
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
// import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})
export class AudioService {


  constructor(private firestore: AngularFirestore) { }
  createartist(artist: Artist){
    return this.firestore.collection('Artists').add(artist);
  }

    // uploadsong() {
      
    // }
}
