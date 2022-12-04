import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'product-header',
  templateUrl: 'product-header.component.html',
  styles:[`
  .mr--0 { margin-right: 0px !important; }
  `]

})
export class ProductHeaderComponent {

  sort = 'desc';
  itemsShowCount = 12;
  @Output() columnsCountChange = new EventEmitter<number>();

  onSortUpdatep(newSort: string): void{
    this.sort = newSort;
  }

  onItemsCountUpdated(count: number): void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }

}
