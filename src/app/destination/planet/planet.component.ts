import { Component, inject, signal } from '@angular/core';
import { spacedata } from '../../../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  name = signal('');
  image = signal('');
  description = signal('');
  distance = signal('');
  travel = signal('');
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const planetName = params['planet'];

      const planet = spacedata[0].destinations.find(
        (p) => p.name.toLowerCase() === planetName.toLowerCase()
      );

      if (planet) {
        this.name.set(planet.name);
        this.image.set(planet.image);
        this.description.set(planet.description);
        this.distance.set(planet.distance);
        this.travel.set(planet.travel);
      }
    });
  }
}
