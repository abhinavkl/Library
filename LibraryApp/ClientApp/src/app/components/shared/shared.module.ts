import { NgModule } from "@angular/core";
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from "@angular/common";
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations:[
    PaginationComponent,
    MultiSelectComponent
  ],
    imports:[
      CommonModule,
      CollapseModule.forRoot(),
      BrowserAnimationsModule,
      BrowserModule,
      FontAwesomeModule
    ],
    exports:[PaginationComponent]
})
export class SharedModule{

}
