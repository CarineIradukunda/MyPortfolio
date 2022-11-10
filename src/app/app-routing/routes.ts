import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    {path: 'contact',component: ContactComponent},
    {path: 'education',component: EducationComponent},
    {path:'experience',component: ExperienceComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];