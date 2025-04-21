import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  public visible = false;

  @Input() public headerElement!: HTMLElement;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.visible = window.scrollY > this.headerElement.clientHeight;
  }
}
