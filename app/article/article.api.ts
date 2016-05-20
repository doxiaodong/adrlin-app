import {ApiPrefix} from '../api-prefix/api-prefix';

import {http, dhttp, dhttp2} from '../http-injector/http-injector';

class Api {

  private prefix: string;

  getArticleCategories() {
    return dhttp2.get(ApiPrefix + '/article/categories/?format=json');
  }

  getArticleList(category: string) {
    return dhttp2.get(ApiPrefix + `/article/articles/${category}/?format=json`);
  }

  getArticleDetail(url: string) {
    return dhttp2.get(ApiPrefix+ `/article/${url}/?format=json`);
  }

  constructor() {
  }

}

export var ArticleApi = new Api();
