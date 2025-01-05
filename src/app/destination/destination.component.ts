import { Component,computed,inject,input,OnInit,signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import { spacedata } from '../../data';



@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent{   
  planets = signal(spacedata[0].destinations[0]);
  
}

