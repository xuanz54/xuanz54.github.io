hexo.extend.filter.register('before_generate', () => {
  // Hexo deep-merges menu entries; replace the defaults to avoid extra links.
  hexo.theme.config.menu = hexo.config.theme_config.menu;
});
