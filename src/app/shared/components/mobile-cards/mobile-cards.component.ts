import { Component, OnInit } from '@angular/core';
import { products } from '../../const/mobileData';

@Component({
  selector: 'app-mobile-cards',
  templateUrl: './mobile-cards.component.html',
  styleUrls: ['./mobile-cards.component.scss']
})
export class MobileCardsComponent implements OnInit {

   productsArr = products

  constructor() { }

  ngOnInit(): void {
  }

}
