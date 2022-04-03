import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

private numbers$ = new  BehaviorSubject<number[]>([])
constructor() { }
addnumberbyNext(){
 let numbers:number[]=  this.numbers$.value
 numbers.push(10)
 this.numbers$.next(numbers);
}
addnumber(){
  this.numbers$.value.push(2);

 }

 getnumbers(): Observable<number[]>{
   return this.numbers$
 }

}
