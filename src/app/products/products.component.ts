import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productId = 0
  orderId = 0
  constructor(private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params.id
      this.orderId = params.oid 
    })
   }

  ngOnInit(): void {
  }

}
