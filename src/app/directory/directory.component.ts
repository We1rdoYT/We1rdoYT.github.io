import { Component } from '@angular/core';
import { Link } from '../link';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Settings } from '../../../settings';

@Component({
  selector: 'app-directory',
  imports: [FontAwesomeModule],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
})
export class DirectoryComponent {
  public readonly links: Link[] = new Settings().links;
}
