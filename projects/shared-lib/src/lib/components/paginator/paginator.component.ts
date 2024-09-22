import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'lib-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnChanges {
  totalItems: number = 0;
  totalPages: number = 0;
  pageSize: number = 0;
  pageSizeOptions: number[] = [0];

  currentPage: number = 1;

  public currentPageInput = input<number>();
  public totalItemsInput = input<number>();
  public totalPagesInput = input<number>();
  public pageSizeInput = input<number>();
  public pageSizeOptionsInput = input<number[]>();

  public currentPageEmitter = output<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPageInput'] && changes['currentPageInput'].currentValue) {
      this.currentPage = changes['currentPageInput'].currentValue;
    }
    if (changes['totalItemsInput'] && changes['totalItemsInput'].currentValue) {
      this.totalItems = changes['totalItemsInput'].currentValue;
    }
    if (changes['totalPagesInput'] && changes['totalPagesInput'].currentValue) {
      this.totalPages = changes['totalPagesInput'].currentValue;
    }
    if (changes['pageSizeInput'] && changes['pageSizeInput'].currentValue) {
      this.pageSize = changes['pageSizeInput'].currentValue;
    }
    if (changes['pageSizeOptionsInput'] && changes['pageSizeOptionsInput'].currentValue) {
      this.pageSizeOptions = changes['pageSizeOptionsInput'].currentValue;
    }
  }

  changePage(event: PageEvent): void {
    if (event.pageIndex + 1 > this.totalPages) {
        // Si estamos intentando ir a una página que no existe, no hacemos nada
        return;
    }
    this.currentPage = event.pageIndex + 1;
    this.currentPageEmitter.emit(this.currentPage);

    window.scrollTo(0, 0);
  }
}