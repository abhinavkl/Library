import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Book, BookFilters, BookResult, Category } from "src/app/models/library.model";
import { Pagination } from "../models/pagination.model";

@Injectable({
    providedIn:'root'
})
export class BookService{
    baseUrl=''
    books=new BehaviorSubject<Book[]>([])
    filters=new BehaviorSubject<BookFilters>(new BookFilters())
    fetchData=new BehaviorSubject<boolean>(true)
    pagination=new BehaviorSubject<Pagination>(new Pagination(100))

    constructor(
        private http:HttpClient,
        @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl=baseUrl
    }

    fetchBooks(){
        this.fetchData.next(true)
        return this.getBooks()
    }

    getBooks(){
        if(this.fetchData.value){
            let filters=JSON.stringify(this.filters.value)
            let pagination=JSON.stringify(this.pagination.value)
            this.http.get<BookResult>(this.baseUrl+'api/book/'+filters+'/'+pagination).subscribe(result=>{
                this.books.next(result.books);
                this.filters.next(result.filters)
                this.pagination.next(result.pagination)
            })
            this.fetchData.next(false)
        }
        return this.books;
    }

    updateCategoryFilters(categories:number[]){
        let currentFilters=this.filters.value
        currentFilters.categories=categories
        this.filters.next(currentFilters)
    }

}

