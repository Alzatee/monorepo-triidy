import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@layout/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'characters',
        loadChildren: () =>
          import('./modules/characters/characters.module').then(
            (module) => module.CharactersModule
          )
    },
    { path: '', redirectTo: 'characters', pathMatch: 'full' }, // Auto redirect
    { path: '404', component: NotFoundPageComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' } // 404 component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }