import { Component, ViewChild } from '@angular/core';
import { DateService } from '../date.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly year: number;

  public constructor(private readonly dateService: DateService) {
    this.year = dateService.year;
  }
}
