import { CommonModule } from '@angular/common';
import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-character-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent implements OnChanges {
  public character: any;
  public showAdditionalInfo: boolean = false;
  public showFavoriteButton: boolean = false;
  public showDeleteButton: boolean = false;
  
  public characterInput = input<any>();
  public showAdditionalInfoInput = input<boolean>();
  public showFavoriteButtonInput = input<boolean>();
  public showDeleteButtonInput = input<boolean>();

  public onCharacterClick = output<number>();
  public deleteFavoriteEvent = output<any>();

  public isFavorite: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['characterInput'] && changes['characterInput'].currentValue) {
      this.character = changes['characterInput'].currentValue;
      this.isFavorite = this.checkIfFavorite(Number(this.character.id));
    }
    if (changes['showAdditionalInfoInput'] && changes['showAdditionalInfoInput'].currentValue) {
      this.showAdditionalInfo = changes['showAdditionalInfoInput'].currentValue;
    }
    if (changes['showFavoriteButtonInput'] && changes['showFavoriteButtonInput'].currentValue) {
      this.showFavoriteButton = changes['showFavoriteButtonInput'].currentValue;
    }
    if (changes['showDeleteButtonInput'] && changes['showDeleteButtonInput'].currentValue) {
      this.showDeleteButton = changes['showDeleteButtonInput'].currentValue;
    }
  }

  clickCharacter(characterId: number): void {
    this.onCharacterClick.emit(characterId);
  }

  addFavorite(event: MouseEvent): void {
    event.stopPropagation();

    const encryptedFavorites = localStorage.getItem('favorites');
    const favorites = encryptedFavorites ? JSON.parse(atob(encryptedFavorites)) : [];

    const characterId = Number(this.character.id);
    const index = favorites.findIndex((fav: any) => fav.id === characterId);
    
    if (index === -1) {
        favorites.push(this.character);
        this.isFavorite = true;
        this.openSuccessModal(`<strong>${this.character.name}</strong> se <span style="color:green">añadió</span> a tu lista de favoritos.`);
    } else {
        favorites.splice(index, 1);
        this.isFavorite = false;
        this.openSuccessModal(`<strong>${this.character.name}</strong> se <span style="color:red">eliminó</span> de tu lista de favoritos.`);
    }

    const newEncryptedFavorites = btoa(JSON.stringify(favorites));
    localStorage.setItem('favorites', newEncryptedFavorites);
  }

  deleteFavorite(event: MouseEvent, character: any): void {
    this.deleteFavoriteEvent.emit(character);
    event.stopPropagation();
  }

  private checkIfFavorite(characterId: number): boolean {
    const encryptedFavorites = localStorage.getItem('favorites');
    const favorites = encryptedFavorites ? JSON.parse(atob(encryptedFavorites)) : [];
    return favorites.some((fav: any) => fav.id === Number(characterId));
  }

  openSuccessModal(message: string): void {
    Swal.fire({
      position: "center",
      icon: "success",
      html: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }

}
