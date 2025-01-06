import { Component, inject, signal } from '@angular/core';
import { spacedata } from '../../../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
})
export class MemberComponent {
  name = signal('');
  image = signal('');
  role = signal('');
  bio = signal('');
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const crewName = params['member'];

      const member = spacedata[0].crew.find(
        (m) => m.name.toLowerCase() === crewName.toLowerCase()
      );

      if (member) {
        this.name.set(member.name);
        this.image.set(member.image);
        this.role.set(member.role);
        this.bio.set(member.bio);
      }
    });
  }
}
