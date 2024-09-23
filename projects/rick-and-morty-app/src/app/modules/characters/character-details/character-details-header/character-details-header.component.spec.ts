import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsHeaderComponent } from './character-details-header.component';

describe('CharacterDetailsHeaderComponent', () => {
  let component: CharacterDetailsHeaderComponent;
  let fixture: ComponentFixture<CharacterDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
