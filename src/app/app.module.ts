
import { CommonModule } from '@angular/common';


import { RestaurentFormComponent } from './forms/restaurent-form/restaurent-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { UserInfoService } from './services/user-info.service';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//reactive forme
import { ReactiveFormsModule } from '@angular/forms';




//owl coursol

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ProviderService } from './services/provider.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurentFormComponent,
    

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ],
  providers: [UserInfoService,AuthService,StorageService,ProviderService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
