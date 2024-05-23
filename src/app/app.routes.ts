import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'footer',component:FooterComponent},
{path:'navbar',component:NavbarComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
