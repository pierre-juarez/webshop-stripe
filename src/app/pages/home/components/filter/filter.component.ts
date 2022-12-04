import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: 'filter.component.html'
})
export class FilterComponent {

  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes','sports'];

  onShowcategory(category: string): void{
    this.showCategory.emit(category);
  }

}
