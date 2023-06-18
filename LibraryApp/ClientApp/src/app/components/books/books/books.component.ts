import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/books.service';
import { Book } from 'src/app/models/library.model';
import { BehaviorSubject } from 'rxjs';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[]=[]
  isCollapsed:boolean=true

  constructor(
    public bookService:BookService
  ){}

  changePage(page:number){
    let pagination=this.bookService.pagination.value
    pagination.pageNumber=page
    this.bookService.pagination.next(pagination)
    return this.bookService.fetchBooks()
  }

  changePageSize(pageSize:number){
    let pagination=this.bookService.pagination.value
    pagination.pageSize=pageSize
    this.bookService.pagination.next(pagination)
    return this.bookService.fetchBooks()
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books=>{
      this.books=books;
    })
  }
}
