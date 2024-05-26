import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
