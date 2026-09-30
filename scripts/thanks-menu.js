// Open the self-hosted thanks page in a separate tab without changing the theme submodule.
hexo.extend.filter.register('after_render:html', (html) => html.replace(
  /(<a class="nav-item-link") href="\/love\/">感谢<\/a>/g,
  '$1 target="_blank" rel="noopener" href="/love/">感谢</a>'
));
