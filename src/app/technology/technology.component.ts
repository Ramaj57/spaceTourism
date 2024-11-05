import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit{
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
