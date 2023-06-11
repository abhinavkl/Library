import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BooksComponent } from "./books/books.component";
import { BookCardComponent } from './book-card/book-card.component';
import { PipeModule } from "src/app/pipes/pipe.module";

@NgModule({
    declarations:[BooksComponent, BookCardComponent],
    imports:[CommonModule,PipeModule],
    exports:[]
})
export class BooksModule{

}