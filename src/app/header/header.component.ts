import { Component } from '@angular/core';
import { DateService } from '../date.service';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly year: number;

  public constructor(private readonly dateService: DateService) {
    this.year = dateService.year;
  }
}
