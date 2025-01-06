import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css',
})
export class CrewComponent {}
