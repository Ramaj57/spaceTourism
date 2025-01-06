import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { spacedata } from '../../../data';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  name = signal('');
  image = signal('');
  description = signal('');
  private route = inject(ActivatedRoute);

 ngOnInit() {
  this.route.params.subscribe((params) => {
    const equipmentName = params['equipment'];

    const equipment = spacedata[0].technology.find(
      (e) => e.name.toLowerCase() === equipmentName.toLowerCase());

      if (equipment) {
        this.name.set(equipment.name);
        this.image.set(equipment.image);
        this.description.set(equipment.description);
      }
 }
  

)
}
}
