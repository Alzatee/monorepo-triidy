import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SharedModule } from '@shared/shared.module';
import { FavoriteCharactersComponent } from './favorite-characters/favorite-characters.component';
import { CharacterDetailsHeaderComponent } from './character-details/character-details-header/character-details-header.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterDetailsHeaderComponent,
    FavoriteCharactersComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
