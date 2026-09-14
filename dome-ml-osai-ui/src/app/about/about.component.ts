import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showAuthors = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAuthors() {
    this.showAuthors = !this.showAuthors;
  }
}
