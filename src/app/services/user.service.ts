import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const user = this.afAuth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('khong co user');
        }
      });
    });
  }
}
