import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers?:Observable<number[]> 
  constructor(private pro:ProviderService) { }

  ngOnInit() {
    this.numbers = this.pro.getnumbers()
  }

}
