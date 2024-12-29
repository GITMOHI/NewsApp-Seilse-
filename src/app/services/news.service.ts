import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
