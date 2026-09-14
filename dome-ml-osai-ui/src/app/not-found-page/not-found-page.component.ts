import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
