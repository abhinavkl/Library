import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BooksComponent } from "./books/books.component";
import { BookCardComponent } from './book-card/book-card.component';
import { PipeModule } from "src/app/pipes/pipe.module";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";
import { BookFiltersComponent } from './book-filters/book-filters.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[BooksComponent, BookCardComponent, BookFiltersComponent],
    imports:[
        CommonModule,
        PipeModule,
        SharedModule,
        FontAwesomeModule,
        BrowserModule,
        CollapseModule.forRoot(),
        BrowserAnimationsModule
    ],
    exports:[]
})
export class BooksModule{

}