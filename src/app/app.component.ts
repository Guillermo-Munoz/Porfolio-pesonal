import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AbautComponent } from "./abaut/abaut.component";
import { FooterComponent } from "./footer/footer.component";
import { DescriptionComponent } from "./description/description.component";
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet, AbautComponent, FooterComponent, DescriptionComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio';
}
