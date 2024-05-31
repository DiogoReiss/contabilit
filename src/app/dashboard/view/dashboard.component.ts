import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input() accountBalance: string = '$0';
}
