import { Experience } from './../classes/experience';
import { Project } from './../classes/project';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    let headers: HttpHeaders = new HttpHeaders();
    console.log("building URL, prod:  ", environment.production, " ", environment.baseUrl)
    console.log("with headers:", headers)
    return this.http.get<Project[]>(environment.baseUrl + "projects", {headers: headers}).pipe(first());
  }

  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(environment.baseUrl + "experiences").pipe(first());
  }
}
