import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {ArticleApi} from './article.api';
import {XdDatePipe} from '../xd-date/xd-date.pipe';
import {viewPrefix} from '../api-prefix/api-prefix';

@Component({
  templateUrl: 'article/article-detail.html',
  pipes: [XdDatePipe],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ArticleDetailComponent implements OnInit {

  public title: string = '';
  public article: Object;
  public articleLoaded: boolean = false;
  public webViewUrl: string = '';

  getArticleDetail(url: string) {
    ArticleApi.getArticleDetail(url)
    .then(data => {
      this.article = {
        articleDetailTitle: data.title,
        category: {
          key: data.category.url,
          name: data.category.name
        },
        createTime: data.create_time,
        content: data.content
      };

      this.title = data.title;

    })
    .then( data => {
      this.articleLoaded = true;
    });

  }

  constructor(
    private routeParams: RouteParams
  ) {
  }

  ngOnInit() {
    let url = this.routeParams.get('url');
    let category = this.routeParams.get('category');

    this.webViewUrl = `${viewPrefix}/article/${category}/${url}`;
    this.getArticleDetail(url);

  }

}
