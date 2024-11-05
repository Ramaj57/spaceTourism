import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent implements OnInit{
  parentDataId!: number;
  childDataId!: number;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params) => {
      this.parentDataId = +params['parentDataId'];
      this.childDataId = +params['childDataId'];    
    });
    throw new Error('Method not implemented.');
  }
}
