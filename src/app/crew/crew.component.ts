import { Component, signal} from '@angular/core';
import { spacedata } from '../../data';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent{
  member = signal(spacedata[0].crew[0])
  
}