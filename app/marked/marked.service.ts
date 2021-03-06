var marked = require('marked');
var hljs = require('highlight.js');

class Marked {

  private options: any = {};

  setRenderer(obj: any) {
    let render = new marked.Renderer();
    let o = Object.keys(obj);
    let l = o.length;
    while (l--) {
      render[o[l]] = obj[o[l]];
    }
    this.options.renderer = render;
    marked.setOptions(this.options);
    return marked;
  }

  setOptions(obj: any) {
    this.options = obj; // TODO: use merge;
  }

  init() {
    return marked;
  }

  constructor() {
    this.setOptions({});
    this.setRenderer({
      heading: (text, level) => {
        let ele = document.createElement('a');
        ele.innerHTML = text;
        let innerText = ele.innerText;
        //var encodeText = encodeURI(innerText);
        return `
          <h${level} id="${innerText}">${text}</h${level}>\n
        `;
      },
      code: (text, language) => {
        let lang: string = '';
        if (language) {
          lang = ' lang-' + language;
        }
        let html: string = hljs.highlightAuto(text).value;
        let lines: string = new Array(html.split(/\n/).length + 1).join('<span></span>');
        return `
          <pre><code class="hljs${lang}"><span class="hjln">${lines}</span>${html}</code></pre>
        `;
      }
    });
  }

}

export var md = new Marked().init();
