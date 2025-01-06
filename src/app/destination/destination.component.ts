import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css',
})
export class DestinationComponent {}
