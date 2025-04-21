import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../link';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalculator,
  faFileLines,
  faFilm,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public readonly creations: Link[] = [
    {
      site: 'Abacus',
      link: 'https://we1rdoyt.github.io/abacus/',
      icon: faCalculator,
    },
    {
      site: 'CAGED System',
      link: 'media/img/caged.jpg',
      icon: faGuitar,
    },
    {
      site: 'Rickroll',
      link: 'roll',
      icon: faFilm,
    },
    {
      site: 'Word Counter',
      link: 'https://we1rdoyt.github.io/Creations/Programs/HTML/Word%20Counter.html',
      icon: faFileLines,
    },
  ].sort((a, b) => a.site.localeCompare(b.site));
}
