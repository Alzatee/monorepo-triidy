import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SharedModule } from '@shared/shared.module';
import { FavoriteCharactersComponent } from './favorite-characters/favorite-characters.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
    FavoriteCharactersComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
