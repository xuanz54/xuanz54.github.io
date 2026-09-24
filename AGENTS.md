# Hexo 博客协作规范

这份文件用于后续新增或修改文章时统一约定资源位置、引用方式和发布流程。

## 内容位置

- 已发布文章放在 `source/_posts/`。
- 暂不发布的草稿放在 `source/_drafts/`。
- 文章附件和配图放在 `source/images/posts/<文章短名>/`，每篇文章使用独立目录。
- README 截图和其他 README 专用图片放在 `readme-assets/`。
- 不要把新资源直接放在 `public/`；`public/` 是 Hexo 构建产物，会被清理并重新生成。
- 主题展示设置放在根目录 `_config.yml` 的 `theme_config` 中；`themes/ayer/` 是独立的主题仓库，不要只在其中修改配置。
- 封面、站点图标和收款图片由 `source/` 自托管。主题有同名默认资源，`scripts/copy-readme.js` 会在构建时覆盖对应路由。

## 图片规范

- 图片必须自托管在本仓库内，不使用 PicUI、pnglog 或其他不受控的第三方图床。
- 文章中使用站点根路径引用，例如：

  ```markdown
  ![部署拓扑图](/images/posts/ssh-nginx/deploy-topology.svg)
  ```

- README 中使用仓库相对路径，例如：

  ```markdown
  ![博客首页截图](readme-assets/home.png)
  ```

- 文件名使用小写英文、数字和连字符，避免空格及特殊字符；`alt` 文本不能为空，并准确描述图片内容。
- 优先使用可维护的 SVG 或压缩后的 PNG/JPEG。引用图片前确认文件已加入 Git，并在本地构建后检查实际页面。
- 每次修改文章后，用下面的命令检查是否残留失效图床链接：

  ```powershell
  rg -n "picui\.ogmua|pnglog\.com" source README.md
  ```

## Mermaid

主题已启用 Mermaid。文章中使用主题支持的 HTML 容器：

```html
<div class="mermaid">
graph TD
  A[开始] --> B[完成]
</div>
```

## 发布前检查

1. 清理并重新生成静态文件：

   ```powershell
   npm run clean
   npm run build
   ```

2. 需要预览时运行 `npx hexo server -p 4001`，访问 `http://localhost:4001/`，检查文章正文、图片、README 资源和 Mermaid 是否正常。
3. 确认 `git status` 中包含预期的文章和资源，没有误改 `public/` 或主题生成文件。
4. 执行 `npm run deploy` 前先检查远端状态；优先采用普通快进推送，不覆盖远端已有提交。

README 的 `readme-assets/` 会由 `scripts/copy-readme.js` 在构建后复制到 `public/readme-assets/`，无需手动修改生成目录。
