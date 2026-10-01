// Open selected menu destinations in a separate tab without changing the theme submodule.
hexo.extend.filter.register('after_render:html', (html) => html.replace(
  /(<a class="nav-item-link") href="(\/love\/|https:\/\/aihot\.news\/hot)">(感谢|AI资讯)<\/a>/g,
  '$1 target="_blank" rel="noopener" href="$2">$3</a>'
));
