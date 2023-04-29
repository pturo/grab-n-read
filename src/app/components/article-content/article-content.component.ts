import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent {

  @Input() article!: Article;

  constructor() {}

}
