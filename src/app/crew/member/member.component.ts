import { Component } from '@angular/core';
import { spacedata } from '../../../data';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  name = spacedata[0].crew[0].name;
  image = spacedata[0].crew[0].image;
  role = spacedata[0].crew[0].role;
  bio = spacedata[0].crew[0].bio;

}
