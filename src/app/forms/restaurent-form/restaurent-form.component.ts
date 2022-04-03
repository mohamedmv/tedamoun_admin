import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { async } from '@firebase/util';
import { Restaurent } from 'src/app/iterfaces/Restaurent';
import { RestaurentService } from 'src/app/services/restaurent.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-restaurent-form',
  templateUrl: './restaurent-form.component.html',
  styleUrls: ['./restaurent-form.component.css']
})
export class RestaurentFormComponent implements OnInit {

  constructor(private restaurentservice: RestaurentService,private auth :Auth) { }

  ngOnInit() {
  }

  urlink?:any;
  restaurent : Restaurent ={
    uid:'',name:"",phone:""
  }
  password:string=""
  password2:string=""
  credit :number=0
  image :any|null = null

  selectFiles =async (event : any) =>{
    if(event.target.files){

      var reader =new FileReader()
      reader.readAsDataURL(event.target.files[0])
      this.image = event.target.files[0] ?? null
     

    
  
      reader.onload=(ev:any)=>{
        
        
        
       
        this.urlink=ev.currentTarget.result
      
      }
     

      
    }
  }


  submit = async ()=>{
    console.log("cliched")
 





    if(this.restaurent.phone.length>=8 && this.credit!=null && this.image !=null && this.password == this.password2 && this.restaurent.name.length>4){
      console.log("start")
      await  this.restaurentservice.addRestaurent(this.restaurent,this.image,this.password);
      console.log("end")
    }
  } 

  currentUser(){
   console.log(this.auth.currentUser) 
   
   
  }

}
