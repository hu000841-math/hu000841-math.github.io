# Yang Hu — Academic Homepage

主页：https://hu000841-math.github.io/

## 平时只需要修改 index.md

1. 打开 [index.md 的编辑入口](https://github.com/hu000841-math/hu000841-math.github.io/edit/main/index.md)。
2. 修改文字、标题或链接。
3. 点击 **Commit changes**，提交到 `main`。
4. 等待 GitHub Pages 自动更新。可在仓库的 **Actions** 查看发布进度。

正文写在文件顶部第二条 `---` 之后。文件开头的 `email`、`cv` 和 `updated` 分别控制邮箱、CV 链接及页脚的更新日期。`layout` 和 `permalink` 保持原值。

## 添加一篇笔记

在 Writings 下添加一行，前后留空行：

```markdown
- [**My new notes.**](assets/my-notes.pdf) A short description.
```

若使用 Google Drive，直接将括号里的地址替换为分享链接。

若使用 PDF 文件，在仓库的 `assets` 文件夹里选择 **Add file → Upload files** 上传，再把链接写成 `assets/文件名.pdf`。文件名和大小写需一致。

## 添加会议或 seminar

在 Activities 下添加一行：

```markdown
- **Seminar name.** University name, October 2026.
```

也可以给名称添加链接：

```markdown
- [**Conference name.**](https://example.com) Location, date.
```

## Markdown 常用写法

| 写法 | 作用 |
| --- | --- |
| `## Writings` | 分区标题，同时生成导航链接 |
| `### Resources` | 分区内的小标题 |
| `- 文字` | 列表中的一项 |
| `**文字**` | 加粗 |
| `*文字*` | 斜体 |
| `[名称](网址)` | 链接 |

列表中另起一个段落时，段落前保留两个空格的缩进。现有的 `{: #abelian-finite-fields}` 等标记用于网页内跳转，保留即可；添加普通条目无需这些标记。

## 更新 CV

上传新 PDF，替换 `assets/Yang_Hu_CV_2026.pdf`，现有链接即可继续使用。若更换文件名，修改 `index.md` 顶部的 `cv`。

## 文件说明

- `index.md`：主页的文字、标题、链接和联系信息。
- `_layouts/home.html`：网页样式及版式模板，平时无需修改。
- `_config.yml`：GitHub Pages 的 Markdown 转换设置，平时无需修改。
- `assets/`：CV、图标，以及以后上传的 PDF。

GitHub Pages 使用 Jekyll 将 Markdown 自动转成网页。当前发布来源为 `main` 的根目录；无需在电脑上安装软件。原来的 `index.html` 和 `.nojekyll` 已由 Markdown 版本替代，旧版本可在 GitHub 提交历史中查看。
