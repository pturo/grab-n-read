import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-tabs',
  templateUrl: './article-tabs.component.html',
  styleUrls: ['./article-tabs.component.css']
})
export class ArticleTabsComponent {

  constructor(private articleService: ArticleService){}

  getNews(domain: string) {
    this.articleService.getNews(`domains=${domain}&language=en`).subscribe();
  }

}
