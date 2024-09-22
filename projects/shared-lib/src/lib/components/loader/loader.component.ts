import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnChanges {
  showLoading: boolean = false;
  @Input() isLoading: boolean | null = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.showLoading = changes['isLoading'].currentValue;
    }
  }
}
