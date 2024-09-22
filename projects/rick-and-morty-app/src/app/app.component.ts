import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from '@core/services/loader.service';
import { environment } from '@environments/environment';
import { LoaderComponent } from '@library/components/loader/loader.component';

@Component({
  selector: 'triidy-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public environment = environment;

  constructor(public loaderService: LoaderService) {}
}
