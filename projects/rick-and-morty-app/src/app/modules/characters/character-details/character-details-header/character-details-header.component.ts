import { Component } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';

@Component({
  selector: 'triidy-character-details-header',
  templateUrl: './character-details-header.component.html',
  styleUrls: ['./character-details-header.component.scss']
})
export class CharacterDetailsHeaderComponent {
  appTexts = AppTexts;
}
