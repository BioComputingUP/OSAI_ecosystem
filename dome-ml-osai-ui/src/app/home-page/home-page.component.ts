import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent {
  public dataCollapsed = true;
  public optimizationCollapsed = true;
  public modelCollapsed = true;
  public evaluationCollapsed = true;
  defTheme = true;

  public expandAll(): void {
    this.dataCollapsed = false;
    this.optimizationCollapsed = false;
    this.modelCollapsed = false;
    this.evaluationCollapsed = false;
  }

  public collapseAll(): void {
    this.dataCollapsed = true;
    this.optimizationCollapsed = true;
    this.modelCollapsed = true;
    this.evaluationCollapsed = true;
  }
}
