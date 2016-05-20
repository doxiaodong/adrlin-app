import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {Page} from 'ui/page';

import {ArticleApi} from '../article/article.api';
import {XdDatePipe} from '../xd-date/xd-date.pipe';

@Component({
  templateUrl: 'index/index.html',
  styleUrls: ['index/index.css'],
  pipes: [XdDatePipe],
  directives: [ROUTER_DIRECTIVES]
})
export class IndexComponent implements OnInit {

  public isLoading: boolean = true;

  public articles: Array<Object> = [];

  goArticleDetail(article) {
    console.log(article.title);
    this.router.navigate(['ArticleDetail', {category: article.category, url: article.url}]);
  }

  getArticles(category: string) {

    ArticleApi.getArticleList(category)
    .then(data => {

      data.results.map(a => {
        let article = {
          url: a.url,
          title: a.title,
          createTime: a.create_time,
          category: a.category.url,
          isUp: a.is_up,
          isHot: a.hot
        };

        this.articles.push(article);

      });

    });

  }

  constructor(
    private router: Router,
    private page: Page
  ) {

  }

  ngOnInit() {

    this.page.actionBarHidden = true;

    let category = 'hot';

    this.getArticles(category);

  }

}
