# Yang Hu — Academic Homepage

主页：https://hu000841-math.github.io/

## 修改主页

正文在 `index.md`，第二条 `---` 之后。用普通 Markdown 修改笔记、研究和活动列表。顶部的 `email`、`cv` 和 `updated` 分别控制邮箱、CV 链接及更新日期。

页面使用简单的衬线字体、默认链接和横线分区。样式在 `_layouts/home.html`。正文的三个标题为 Writings、Research、Activities；若更改标题，也请更新正文前的 Jump to 目录链接。

添加笔记的写法：

```markdown
- [My new notes.](assets/my-notes.pdf) A short description.
```

Google Drive 分享链接也可以直接放入括号。保留 `{: #abelian-finite-fields}`、`{: #galois-representations}` 和 `{: #period-rings}`，这些标记供页内链接使用。

## 更新 CV

当前文件为 `assets/Yang_Hu_CV_20261019.pdf`。上传新 PDF 后，修改 `index.md` 顶部的 `cv` 文件路径。

## 发布

提交到 `main` 后，GitHub Pages 自动构建。发布进度在仓库 Actions 中查看。`blog/` 是现有博客，主页通过 `/blog/` 链接访问。
