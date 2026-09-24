const { cp, readFile } = require('node:fs/promises');
const { join } = require('node:path');

hexo.extend.filter.register('after_generate', async () => {
  const readme = await readFile(join(hexo.base_dir, 'README.md'));
  hexo.route.set('README.md', readme);
  await cp(
    join(hexo.base_dir, 'readme-assets'),
    join(hexo.public_dir, 'readme-assets'),
    { recursive: true }
  );
});
