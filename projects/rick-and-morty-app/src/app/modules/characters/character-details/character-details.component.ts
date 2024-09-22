import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterModel } from '@core/models/classes/character-model';
import { AppTexts } from '@core/models/enums/app-text';
import { ErrorMessages } from '@core/models/enums/error-messages';
import { QueryResponseCharacter } from '@core/models/interfaces/query-response-character';
import { RickAndMortyService } from '@core/services/rick-and-morty.service';
import { navigateToStart, openErrorModal } from '@shared/shared-functions';

@Component({
  selector: 'triidy-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  appTexts = AppTexts;
  errorMessages = ErrorMessages;
  characterId: number | undefined;
  character: CharacterModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly rickAndMortyService: RickAndMortyService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.characterId = Number(this.route.snapshot.paramMap.get('characterId'));
    this.loadCharacter(this.characterId);
  }

  loadCharacter(characterId: number): void {
    this.rickAndMortyService.getCharacterByQuery(characterId).subscribe({
      next: (response: QueryResponseCharacter) => {
        this.character = response.data.character;
      },
      error: (error) => {
        const errorMessage = 'Error loading character: ' + error.message;
        console.error(errorMessage);
        openErrorModal(this.errorMessages.GeneralErrorMessage);
      }
    });
  }

  goBack(): void {
    navigateToStart(this.router);
  }
}
