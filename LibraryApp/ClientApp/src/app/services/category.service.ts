import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category } from "../models/library.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class CategoryService{
    categories=new BehaviorSubject<Category[]>([])

    constructor(
        private http:HttpClient
    ){}

    getCategories(){
        if(!this.categories.value.length){
            this.http.get<Category[]>('api/category').subscribe(categories=>{
                this.categories.next(categories);
            })    
        }
        return this.categories;
    }

}
