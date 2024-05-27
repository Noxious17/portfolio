import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [NavbarComponent, FooterComponent]
})
export class AboutComponent {
onAbout() {
throw new Error('Method not implemented.');
}
onHome() {
throw new Error('Method not implemented.');
}

}
