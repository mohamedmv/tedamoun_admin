import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { linkWithPhoneNumber, verifyPasswordResetCode } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sufix:string = "@tedamoun.mr"
constructor( private auth:Auth) { }

createUser = async (number:string ,password:string) : Promise<string> =>{
  let uid:string=''
 let user = await createUserWithEmailAndPassword(this.auth,number+this.sufix,password).then((val)=>{
   console.log(val)
   uid = val.user.uid
 });
 return uid
}

}
