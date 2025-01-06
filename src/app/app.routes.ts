import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { MemberComponent } from './crew/member/member.component';
import { PlanetComponent } from './destination/planet/planet.component';
import { EquipmentComponent } from './technology/equipment/equipment.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'destination',
        component: DestinationComponent,
        children: [
            {
                path: '',
                redirectTo: 'moon',
                pathMatch: 'full',
            },
            {
                path: ':planet',
                component: PlanetComponent,
            },           
        ]
    },
    
    {
        path: 'crew', component: CrewComponent,
        children: [
            {
                path: '',
                redirectTo: 'Douglas Hurley',
                pathMatch: 'full',
            },
            {
                path: ':member', component: MemberComponent,
            },            
        ]
    },
    {
        path: 'technology', component: TechnologyComponent,
        children: [
            {
                path: '',
                redirectTo: 'Launch vehicle',
                pathMatch: 'full',
            },
            {
                path: ':equipment', component: EquipmentComponent,
            },            
        ]
    },
];
