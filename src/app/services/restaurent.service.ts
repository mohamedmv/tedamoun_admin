import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { getDoc } from 'firebase/firestore';
import { Restaurent } from '../iterfaces/Restaurent';
import { UserInfo } from '../iterfaces/user-info';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
   collectionName : string="Restaurent";

constructor(private firestore:Firestore,private storag: StorageService,private infoservice : UserInfoService,private auth :AuthService) { }

addRestaurent = async (restaurent: Restaurent,image:any,password:string ) =>{

  // creating firebase auth user
  let uid= await this.auth.createUser(restaurent.phone,password)
  restaurent.uid=uid

  // uploading user image
  image =await this.storag.upload(this.collectionName,image)

  // creating restaurent document
  restaurent.image = image;
  const col = collection(this.firestore,this.collectionName);
  let ref =doc(this.firestore,this.collectionName+'/'+uid)
  let  result  = await setDoc(ref,restaurent)
  console.log(result)

  // creating user info
   await this.infoservice.initalize({point:0,type:'restaurent',uid:uid,})
  
}

}
