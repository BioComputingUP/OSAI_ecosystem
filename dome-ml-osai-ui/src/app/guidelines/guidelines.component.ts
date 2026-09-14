import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-guidelines',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
