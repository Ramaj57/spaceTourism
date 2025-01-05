import { Component,computed,inject,input,OnInit,signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink} from '@angular/router';
import { spacedata } from '../../data';
import { DataService } from '../data.service';



@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent{   
  planets = signal(spacedata[0].destinations[0]);


  
}

