import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-founded',
  templateUrl: './not-founded.component.html',
  styleUrl: './not-founded.component.scss',
})
export class NotFoundedComponent {
  constructor(private Location: Location) {}
  back(): void {
    this.Location.back();
  }
}
