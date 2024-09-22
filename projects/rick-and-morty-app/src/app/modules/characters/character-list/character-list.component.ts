import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from '@core/models/classes/character-model';
import { ErrorMessages } from '@core/models/enums/error-messages';
import { DefaultResponse } from '@core/models/interfaces/default-response';
import { QueryResponseCharacters } from '@core/models/interfaces/query-response-characters';
import { RickAndMortyService } from '@core/services/rick-and-morty.service';
import { openErrorModal } from '@shared/shared-functions';

@Component({
  selector: 'triidy-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  errorMessages = ErrorMessages;
  public characters: CharacterModel[] = [];

  currentPage: number = 1;
  totalItems: number = 0;
  totalPages: number = 0;
  maxPageSize: number = 20;
  searchTerm: string = '';
  showPaginator: boolean = false;

  constructor(
    private readonly rickAndMortyService: RickAndMortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number): void {
    this.rickAndMortyService.getCharacters(page).subscribe({
      next: (response: DefaultResponse) => {
        this.characters = response.results;
        this.totalItems = response.info.count;
        this.totalPages = response.info.pages;
        this.showPaginator = true;
      },
      error: (error) => {
        const errorMessage = 'Error loading characters: ' + error.message;
        console.error(errorMessage);
        openErrorModal(this.errorMessages.GeneralErrorMessage);
      }
    });
  }

  handleSearch(event: string) {
    //Reiniciar items del paginador cada que mapee una busqueda/caracter del prompt
    this.showPaginator = false;
    this.currentPage = 1;

    this.searchTerm = event;
    this.searchCharacters(this.currentPage, event);
  }

  searchCharacters(page: number, characterName: string): void {
    this.rickAndMortyService.searchCharacterByName(page, characterName).subscribe({
      next: (response: QueryResponseCharacters) => {
        if (response && response.data && response.data.characters) {
          this.characters = response.data.characters.results;
          this.totalItems = response.data.characters.info.count;
          this.totalPages = response.data.characters.info.pages;
          this.showPaginator = true;
        } else {
          this.characters = [];
          this.totalItems = 0;
          this.totalPages = 0;
        }
      },
      error: (error) => {
        const errorMessage = 'Error fetching characters: ' + error.message;
        console.error(errorMessage);
        openErrorModal(this.errorMessages.GeneralErrorMessage);
      }
    });
  }

  currentPageEmitter(event: number): void {
    this.currentPage = event;

    // Carga de personajes según la página solicitada y según si es general o busqueda.
    if (this.searchTerm) {
      this.searchCharacters(this.currentPage, this.searchTerm);
    } else {
      this.loadCharacters(this.currentPage);
    }
  }

  onCharacterClick(event: number) {
    const characterId = event;
    this.router.navigate(['characters', 'character-details', characterId]);
  }

  goToFavorites(): void {
    setTimeout(() => {
      this.router.navigate(['characters', 'favorite-characters']);
    });
  }

}