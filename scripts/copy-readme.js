const { cp, readFile } = require('node:fs/promises');
const { join } = require('node:path');

hexo.extend.filter.register('after_generate', async () => {
  const readme = await readFile(join(hexo.base_dir, 'README.md'));
  hexo.route.set('README.md', readme);
  // Ayer also provides these paths, so replace its default routes.
  for (const asset of ['favicon.ico', 'images/alipay.jpg', 'images/wechat.jpg']) {
    hexo.route.set(asset, await readFile(join(hexo.source_dir, asset)));
  }
  await cp(
    join(hexo.base_dir, 'readme-assets'),
    join(hexo.public_dir, 'readme-assets'),
    { recursive: true }
  );
});
