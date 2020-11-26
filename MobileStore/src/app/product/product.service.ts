import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../login/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private allProductSubject: BehaviorSubject<Product>;
    public allProduct: Observable<Product>;
    private urlAPI = 'http://localhost:8080/api/products/1';

    constructor(private http: HttpClient) {
        this.allProductSubject = new BehaviorSubject<Product>(
        JSON.parse(localStorage.getItem('allProduct')!)
        );
        this.allProduct = this.allProductSubject.asObservable();
    }

    find(id:number):Observable<Product[]>{
      return this.http.get<Product[]>(`${this.urlAPI}/${id}`).pipe(
      )
      
    }
}