import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../link';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Settings } from '../../../settings';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public readonly featured_creations: Link[] = new Settings()
    .featured_creations;
}
