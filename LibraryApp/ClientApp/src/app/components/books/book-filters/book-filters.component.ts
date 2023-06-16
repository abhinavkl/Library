import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowLeftRotate, faCaretSquareLeft, faInfo, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/models/library.model';
import { BookService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.css']
})
export class BookFiltersComponent implements OnInit {
  categoryCollapsed:boolean=true
  infoIcon=faCaretSquareLeft

  selectedCategories:number[]=[]
  categories:Category[]=[]

  constructor(
    private bookService:BookService,
    private categoryService:CategoryService
  ){}

  ngOnInit(): void {
    this.selectedCategories= this.bookService.filters.value.categories
    this.categoryService.getCategories().subscribe(cats=>{
      this.categories=cats
    })
  }

  fetchBooks(){
    this.bookService.fetchBooks()
  }

  updateCategoryFilters(categoryId:number){
    let filters=this.bookService.filters.value
    let currentCategories=this.selectedCategories
    if(currentCategories.includes(categoryId)){
      currentCategories=currentCategories.filter(i=>i!==categoryId)
    }
    else{
      currentCategories.push(categoryId)
    }
    filters.categories=currentCategories
    this.selectedCategories=currentCategories
    this.bookService.filters.next(filters);
  }

}
