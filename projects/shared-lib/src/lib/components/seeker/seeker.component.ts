import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-seeker',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './seeker.component.html',
  styleUrl: './seeker.component.scss'
})
export class SeekerComponent {
  public searchTermChanged = output<string>();
  public onClickFavoritesEvent = output<void>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTermChanged.emit(input.value);
  }

  onClickFavorites(): void {
    this.onClickFavoritesEvent.emit();
  }
}
