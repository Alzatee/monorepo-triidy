import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCharactersComponent } from './favorite-characters.component';

describe('FavoriteCharactersComponent', () => {
  let component: FavoriteCharactersComponent;
  let fixture: ComponentFixture<FavoriteCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
