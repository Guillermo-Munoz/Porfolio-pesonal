import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import projectsData from './project.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-project',
  standalone: true, // Asegúrate de que standalone esté en true
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = projectsData;
}
