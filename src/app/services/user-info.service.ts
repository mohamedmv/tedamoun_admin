import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { UserInfo } from '../iterfaces/user-info';

@Injectable()
export class UserInfoService {
    collectionName:string = "info"

    usertypes = ['normal','worker','driver','hospital','restaurent']

constructor(private firebase:Firestore) { }

    initalize = async  (info:UserInfo ) =>{
       await  setDoc(doc(this.firebase,this.collectionName+"/"+info.uid) ,info)
      
    }
}
