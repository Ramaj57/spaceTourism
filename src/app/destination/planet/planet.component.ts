import { Component } from '@angular/core';
import { spacedata } from '../../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  name = spacedata[0].destinations[0].name;
  image = spacedata[0].destinations[0].image;
  description = spacedata[0].destinations[0].description;
  distance = spacedata[0].destinations[0].distance;
  travel = spacedata[0].destinations[0].travel;
}
