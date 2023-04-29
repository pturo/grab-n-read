import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {

  selectedArticle!: Article;

  constructor() {}

  onArticleSelected(article: Article) {
    this.selectedArticle = article;
  }
}
