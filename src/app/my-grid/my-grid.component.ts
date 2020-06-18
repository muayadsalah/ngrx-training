import { Component, OnInit } from '@angular/core';
import { products } from '../../assets/products';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.sass']
})
export class MyGridComponent implements OnInit {
  public gridData: any[] = products;
  constructor() { }

  ngOnInit(): void {
  }

}
