import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';
import ProductEntity from 'src/app/entities/Product.entity';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent {
  tabTop = 'Top 10 items sold';
  tabAllProducts = 'All my products';
  tabCurrentIndex = 0;
  topItemsSoldConfig = {
    id: 'sellersChart',
    prefix: '',
    isPercentage: false,
    labels: [
      'SamsungS4',
      'SamsungS5',
      'SamsungS7',
      'IPhone10',
      'IPhone11',
      'IPhone12',
      'BlackBerry',
      'OnePlus5t',
      'OnePlus7t',
      'RedmiNote',
      'Nokia3310',
    ],
    values: [100, 150, 30, 300, 200, 31, 22, 36, 122, 189],
    suffix: 'items sold',
  };

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabCurrentIndex = tabChangeEvent.index;
  };
}
