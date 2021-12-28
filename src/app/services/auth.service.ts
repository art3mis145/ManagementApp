import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private user: UserService
  ) {}
  async signinGmail() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider).then((res) => {
      console.log(' da dang nhap thanh cong');
      //  this.router.navigate(['home']);
      // this.router.navigate(['home']);
    });
  }
  logout() {
    return new Promise<any>(async (resolve, reject) => {
      if (await this.afAuth.currentUser) {
        //if (this.fauth.auth.currentUser){

        this.afAuth.signOut();
        resolve('log out');
      } else {
        reject();
      }
    });
  }
  isLogIn() {
    this.user
      .getCurrentUser()
      .then((user) => {
        if (user) {
          return true;
        }
        return false;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  public isAuthenticated(): boolean {
    if (this.user) {
      return true;
    }
    return false;
  }
  //Tương tự viết hàm signin với tài khoản firebase như sau:
  // 		  siginFirebase(email: string, password:string){
  // 			return new Promise<any>((resolve, reject) => {
  // 			  this.fauth.signInWithEmailAndPassword(email, password)
  // 			  .then(res => {

  // 				resolve(res);
  // 				//this.sharingService.isUserLoggedIn.next(true);
  // 			  }, err => reject(err))
  // 			})
  // }
  public createUser(email: any, password: any) {
    this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['']);
  }

  public LogInUsingCreateAcc(email: any, password: any) {
    this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/management']);
  }
}
