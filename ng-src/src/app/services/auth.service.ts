import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<Observable<firebase.User>> = new BehaviorSubject(null);
  public user$: Observable<firebase.User> = this.user.asObservable().pipe(
    switchMap((authenticatedUser: Observable<firebase.User>) => authenticatedUser)
  );
  constructor(private readonly afAuth: AngularFireAuth) { 
    this.user.next(this.afAuth.authState);
  }

  signIn(email: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }
  
  login(): Observable<auth.UserCredential>{
    return from(this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  create(email: string, password: string): Observable<auth.UserCredential>{
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  logout(): Observable<void>{
    return from(this.afAuth.signOut());
  }
}
