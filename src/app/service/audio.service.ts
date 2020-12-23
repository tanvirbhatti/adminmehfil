import { Injectable } from '@angular/core';
import {Artist} from "./artist.module"
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})
export class AudioService {

  uploadProgress

  constructor(private firestore: AngularFirestore,
     private storage:AngularFireStorage,
     private ref :AngularFireStorageReference,
     private task : AngularFireUploadTask
     ) { }
  createartist(artist: Artist){
    return this.firestore.collection('Artists').add(artist);}

    uploadsong(event) {
      const randomId = Math.random().toString(36).substring(2);
      this.ref = this.storage.ref(randomId);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadProgress = this.task.snapshotChanges()
        .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
    }
}
