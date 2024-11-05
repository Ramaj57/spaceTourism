import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent,        
    },
    {
        path:'destination/:parentDataId', component:DestinationComponent,
        children: [
        {
            path:'moon/:childDataId', component:DestinationComponent,
        },
        {
            path:'mars/:childDataId', component:DestinationComponent,
        },
        {
            path:'europa/:childDataId', component:DestinationComponent,
        },
        {
            path:'titan/:childDataId', component:DestinationComponent,
        },
        ]
    },
    {
        path:'crew/:parentDataId', component:CrewComponent,
        children: [
        {
            path:'DouglasHurley/:childDataId', component:CrewComponent,
        },
        {
            path:'MarkShuttleworth/:childDataId', component:CrewComponent,
        },
        {
            path:'VictorGlover/:childDataId', component:CrewComponent,
        },
        {
            path:'AnoushehAnsari/:childDataId', component:CrewComponent,
        },
        ]
    },
    {
        path:'technology/:parentDataId', component:TechnologyComponent,
        children: [
        {
            path:'capsule/:childDataId', component:TechnologyComponent,
        },
        {
            path:'vehicle/:childDataId', component:TechnologyComponent,
        },
        {
            path:'spaceport/:childDataId', component:TechnologyComponent,
        },
        ]
    },
];
