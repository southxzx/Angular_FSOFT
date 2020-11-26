import { Component, OnInit } from '@angular/core';
import {ListProductsService} from '../list-products/list-products.service';
import { Product } from '../login/model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  datas:Product[]=[];

  constructor(private listProductService: ListProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.listProductService.getAll().subscribe((res:any)=>{
      this.datas = res
    })
  }

}
