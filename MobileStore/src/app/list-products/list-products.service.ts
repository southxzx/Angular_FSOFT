import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../login/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ListProductsService {
    private allProductSubject: BehaviorSubject<Product>;
    public allProduct: Observable<Product>;
    private urlAPI = 'https://utebookstore.herokuapp.com/books';

    constructor(private http: HttpClient) {
        this.allProductSubject = new BehaviorSubject<Product>(
        JSON.parse(localStorage.getItem('allProduct')!)
        );
        this.allProduct = this.allProductSubject.asObservable();
    }

    getAll():Observable<Product[]>{
      console.log(this.http.get<Product[]>(this.urlAPI).pipe(
        ))
      return this.http.get<Product[]>(this.urlAPI).pipe(
      )
      
    }

    // public get currentUserValue(): Product {
    //     return this.allProductSubject.value;
    // }

    // public login = (username: string, password: string) => {
    //     console.log(username);
    //     console.log(password);
    //     const loginUrl = `${this.urlAPI}/api/users/login`;
    //     console.log(loginUrl);
    //     return this.http.post<any>(loginUrl, { username, password,})
    //         .pipe(
    //             map((user) => {
    //                 // console.log(user);
    //                 if (user != null){
    //                     const newUser = {} as User;
    //                     newUser.id = user.id;
    //                     newUser.username = user.username;
    //                     newUser.password = user.password;
    //                     this.currentUserSubject.next(newUser);
    //                     return user;
    //                 } else {return null;}
    //             })
    //         );
    //     }
    // public logout = () => {
    //     localStorage.removeItem('username');
    //     localStorage.removeItem('password');
    //     this.currentUserSubject.next(null!);
    // }
}