import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../login/model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = new Product();

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id:any){
    this.productService.find(id).subscribe((res:any)=>{
      this.product = res;
      console.log(this.product);
    });  
  }
}
