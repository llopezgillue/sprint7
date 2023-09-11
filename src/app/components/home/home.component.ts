
import { Component } from '@angular/core';
import { optionList } from '../interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  optionList: optionList = {
    firstOption: false,
    secondOption: false,
    thirdOption: false,
    totalPrice: 0,
  }

  lastWebCost: number = 0;


  Web(): void {
    if (this.optionList.firstOption) {
      this.optionList.totalPrice += 500;
    } else {
      this.optionList.totalPrice -= this.lastWebCost + 500;
      this.lastWebCost = 0;
    }
  }


  seo(): void {
    if (this.optionList.secondOption) {
      this.optionList.totalPrice += 300;
    } else {
      this.optionList.totalPrice -= 300;
    }
  }


  ad(): void {
    if (this.optionList.thirdOption) {
      this.optionList.totalPrice += 200;
    } else {
      this.optionList.totalPrice -= 200;
    }
  }


  changeTotalPrice(cost: number): void {
    this.optionList.totalPrice -= this.lastWebCost;
    this.optionList.totalPrice += cost;
    this.lastWebCost = cost;
  }


  constructor(private location: Location) {}

  goMain(): void {
    this.location.back();
  }
}
