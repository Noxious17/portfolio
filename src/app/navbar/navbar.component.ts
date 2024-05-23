import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor (public router: Router){

  }
  onHome() {
    this.router.navigate(['/home']);
  }

  onSkills(){
    const skillSelection=document.getElementById('skills-section')
    if(skillSelection){
      skillSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
    this.router.navigate(['/home']);
  }
  onContact() {
    this.router.navigate(['/contact']);
  }

  onAbout() {
    this.router.navigate(['/about']);
  }

}
