import { Component, OnInit } from '@angular/core';
import { BookService } from './books.service';
import { Book } from 'src/app/models/library.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[]=[]

  constructor(
    public bookService:BookService
  ){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books=>{
      this.books=books;
      console.log(this.books)
    })
  }
}
