import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private readonly date: Date = new Date();

  public get year(): number {
    return this.date.getFullYear();
  }
}
