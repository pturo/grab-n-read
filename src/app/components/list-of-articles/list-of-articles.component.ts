import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-of-articles',
  templateUrl: './list-of-articles.component.html',
  styleUrls: ['./list-of-articles.component.css']
})
export class ListOfArticlesComponent {

  @Output() articleSelected = new EventEmitter<Article>();
  articles: Article[];
  isLoading: boolean = false;

  constructor(private articleService: ArticleService) {
    this.articles = [];
    this.loadArticles();
  }

  loadArticles() {
    this.isLoading = true;
    this.articleService.getNews('domains=bbc.com&language=en').subscribe((articles: any) => {
      this.articles = articles.articles;
      this.isLoading = false;
      console.log(articles);
    });
  }

  getNewsFromOtherDomain(domain: string) {
    this.isLoading = true;
    this.articleService.getNews('domains=cnn.com&language=en').subscribe((articles: any) => {
      this.articles = articles.articles;
      this.isLoading = false;
      console.log(articles);
    });
  }

  onArticleSelected(article: Article) {
    this.articleSelected.emit(article);
  }

}
