import { Component } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public readonly year: number;

  public constructor(private readonly dateService: DateService) {
    this.year = dateService.year;
  }
}
