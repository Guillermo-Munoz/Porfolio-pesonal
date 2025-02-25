import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}
export class ProjectsService {
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/projects.json');
  }

}




