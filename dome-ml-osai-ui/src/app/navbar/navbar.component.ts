import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  collapseNav(): void {
    this.isCollapsed = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
