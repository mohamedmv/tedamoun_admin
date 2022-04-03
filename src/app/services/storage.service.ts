import { Injectable } from '@angular/core';
import {Storage,getDownloadURL,uploadBytes,UploadTask,deleteObject,ref} from "@angular/fire/storage";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor(private storage :Storage) {
  
 }

 upload =async (name:string,image:any) : Promise<string> =>{
    const r =ref(this.storage,name+"/"+Date.now().toString());
    const result = await uploadBytes(r,image)
    
   const url = await  getDownloadURL(result.ref)
   
   return url

   
 }

}



