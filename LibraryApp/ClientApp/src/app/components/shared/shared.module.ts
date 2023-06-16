import { NgModule } from "@angular/core";
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from "@angular/common";
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
    declarations:[
    PaginationComponent,
    MultiSelectComponent
  ],
    imports:[CommonModule],
    exports:[PaginationComponent]
})
export class SharedModule{

}
