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
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  onSortUpdatep(newSort: string): void{
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsCountUpdated(count: number): void{
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }

}
