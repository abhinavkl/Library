import { Component, Input, Output,EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faCancel, faCheck, faCircleArrowLeft, faCross, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage=1
  @Input() totalPages=1
  @Input() pageSize=100
  @Output() changePage=new EventEmitter<number>()
  @Output() changePageSize=new EventEmitter<number>()
  editIcon=faEdit
  backIcon=faCircleArrowLeft
  typePageNumber=false
  @ViewChild('pageInput') pageEdit!:ElementRef;

  constructor(){
  }


  get pages(){
    return Array.from({length: this.totalPages}, (_, index) => index + 1);
  }

  ngOnInit(): void {
  }

  updatePage(page:number){
    this.changePage.emit(page)
  }

  updatePageSize(event:any){
    this.changePageSize.emit(parseInt(event!.target!.value))
  }

  onPageInput(event:any){
    let isValid=event!.charCode >= 48 && event!.charCode <= 57;
    if(!isValid){
      return isValid;
    }
    else{
      let enteredPage=this.pageEdit.nativeElement.value+event.key;
      console.log(enteredPage)
      if(enteredPage){
         return parseInt(enteredPage)<=this.totalPages;          
      }
      else return true;
    }
  }

  onPageInputBlur(event:any){
    let page=Math.min(parseInt(this.pageEdit.nativeElement.value),this.totalPages)
    console.log(parseInt(this.pageEdit.nativeElement.value),this.totalPages)
    this.changePage.emit(page)    
  }
}
