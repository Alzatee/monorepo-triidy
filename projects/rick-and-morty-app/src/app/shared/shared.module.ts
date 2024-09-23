import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '@library/components/character-card/character-card.component';
import { PaginatorComponent } from '@library/components/paginator/paginator.component';
import { SeekerComponent } from '@library/components/seeker/seeker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL_MODULES = [
  MatButtonModule, 
  MatDividerModule
];

const COMMON_MODULES = [
  CommonModule
];

const LIB_COMPONENTS = [
  CharacterCardComponent, 
  PaginatorComponent,
  SeekerComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES,
    ...MATERIAL_MODULES,
    ...LIB_COMPONENTS
  ], 
  exports: [
    ...COMMON_MODULES,
    ...MATERIAL_MODULES,
    ...LIB_COMPONENTS
  ]
})
export class SharedModule { }
