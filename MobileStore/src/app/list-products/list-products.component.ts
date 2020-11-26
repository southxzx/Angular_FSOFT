import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ListProductsService} from '../list-products/list-products.service';
import { Product } from '../login/model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  datas:Product[]=[];

  constructor(
    private listProductService: ListProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.listProductService.getAll().subscribe((res:any)=>{
      this.datas = res

    })
  }


}
