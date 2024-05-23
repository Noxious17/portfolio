import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink ,RouterLinkActive} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, 
      CommonModule, HomeComponent,AboutComponent,
      ContactComponent,FooterComponent,
      NavbarComponent]
})
export class AppComponent {
  title = 'project';
}
