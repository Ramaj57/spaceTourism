import { Component } from '@angular/core';
import { spacedata } from '../../../data';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  name = '';
  image = '';
  description = '';
  distance = '';
  travel = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const planetName = params['planet'];

      const planet = spacedata[0].destinations.find(
        (p) => p.name.toLowerCase() === planetName.toLowerCase()
      );

      if (planet) {
        this.name = planet.name;
        this.image = planet.image;
        this.description = planet.description;
        this.distance = planet.distance;
        this.travel = planet.travel;
      }
    });
  }
}
