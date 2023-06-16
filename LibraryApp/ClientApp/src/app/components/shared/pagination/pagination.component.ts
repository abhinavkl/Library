import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage=1
  @Input() totalPages=1
  totalPageNumbers:any=[];
  @Input() pageSize=100
  @Output() changePage=new EventEmitter<number>()
  @Output() changePageSize=new EventEmitter<number>()

  constructor(){
  }

  ngOnInit(): void {
    this.totalPageNumbers=Array(this.totalPages).keys()
  }

  updatePage(page:number){
    this.changePage.emit(page)
  }

  updatePageSize(event:any){
    this.changePageSize.emit(parseInt(event!.target!.value))
  }

}
