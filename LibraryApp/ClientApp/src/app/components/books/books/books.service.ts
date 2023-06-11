import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Book } from "src/app/models/library.model";

@Injectable({
    providedIn:'root'
})
export class BookService{
    baseUrl=''
    books=new BehaviorSubject<Book[]>([])
    
    constructor(
        private http:HttpClient,
        @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl=baseUrl
    }

    getBooks(){
        if(!this.books.value.length){
            this.http.get<Book[]>(this.baseUrl+'api/book').subscribe(books=>{
                this.books.next(books);
            })
        }
        return this.books;
    }



}

