import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from '@core/models/classes/character-model';
import { AppTexts } from '@core/models/enums/app-text';
import { navigateToStart } from '@shared/shared-functions';

@Component({
  selector: 'triidy-favorite-characters',
  templateUrl: './favorite-characters.component.html',
  styleUrls: ['./favorite-characters.component.scss']
})
export class FavoriteCharactersComponent implements OnInit {
  appTexts = AppTexts;
  public favorites: CharacterModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = [];
    const encryptedFavorites = localStorage.getItem('favorites');
    const favorites = encryptedFavorites ? JSON.parse(atob(encryptedFavorites)) : [];

    this.favorites = favorites;
  }

  onCharacterClick(event: number) {
    const characterId = event;
    this.router.navigate(['characters', 'character-details', characterId]);
  }

  removeFavorite(character: any): void {
    const encryptedFavorites = localStorage.getItem('favorites');
    const favorites = encryptedFavorites ? JSON.parse(atob(encryptedFavorites)) : [];
  
    const index = favorites.findIndex((fav: any) => fav.id === character.id);
    
    if (index !== -1) {
      favorites.splice(index, 1);
      const newEncryptedFavorites = btoa(JSON.stringify(favorites));
      localStorage.setItem('favorites', newEncryptedFavorites);
      this.loadFavorites();
    }
  }

  goBack(): void {
    navigateToStart(this.router);
  }
}
