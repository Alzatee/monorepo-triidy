import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppTexts } from '@core/models/enums/app-text';
import { ErrorMessages } from '@core/models/enums/error-messages';

@Component({
  selector: 'triidy-not-found-page',
  standalone: true,
  imports: [],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  errorMessages = ErrorMessages;
  appTexts = AppTexts;

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
