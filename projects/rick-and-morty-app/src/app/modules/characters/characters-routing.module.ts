import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FavoriteCharactersComponent } from './favorite-characters/favorite-characters.component';

const routes: Routes = [
    {
        path: 'character-list',
        component: CharacterListComponent
    },
    {
        path: 'character-details/:characterId',
        component: CharacterDetailsComponent,
    },
    {
        path: 'favorite-characters',
        component: FavoriteCharactersComponent,
    },
    { 
        path: '', redirectTo: 'character-list', pathMatch: 'full' 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }
