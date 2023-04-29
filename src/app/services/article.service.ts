import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseApiUrl = 'https://newsapi.org/v2/everything?';

  constructor(private http: HttpClient) { }

  // Get all news from different domains, based on user's choice.
  getNews(...params: any): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseApiUrl + params + '&apiKey=' + environment.apiKey);
  }
}
