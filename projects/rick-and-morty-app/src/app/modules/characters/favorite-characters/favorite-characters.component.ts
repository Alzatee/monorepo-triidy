import { Component, OnInit, HostListener } from '@angular/core';
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
  public displayedFavorites: CharacterModel[] = [];
  private limit: number = 12;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadFavorites();
    this.loadMoreFavorites();
  }

  loadFavorites(): void {
    const encryptedFavorites = localStorage.getItem('favorites');
    const favorites = encryptedFavorites ? JSON.parse(atob(encryptedFavorites)) : [];
    this.favorites = favorites;
  }

  loadMoreFavorites(): void {
    const nextFavorites = this.favorites.slice(0, this.displayedFavorites.length + this.limit);
    this.displayedFavorites = nextFavorites;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const offset = window.pageYOffset + windowHeight;

    if (offset >= height) {
      this.loadMoreFavorites();
    }
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
      this.displayedFavorites = [];
      this.loadMoreFavorites(); 
    }
  }

  goBack(): void {
    navigateToStart(this.router);
  }
}