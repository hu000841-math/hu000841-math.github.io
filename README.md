# Yang Hu — Academic Homepage

A simple, responsive academic homepage for GitHub Pages. The website uses a classic single-column layout, with a short introduction, email and CV links, followed by Writings, Research, and Activities. Activities includes seminars, the Berkeley Directed Reading Program, conferences, and summer schools. Writing links are retained from the current Google Sites homepage.

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库，名称为 `你的GitHub用户名.github.io`。例如用户名为 `example` 时，仓库名为 `example.github.io`。免费账号可使用公开仓库。
2. 解压交付的 ZIP，将 **ZIP 内的文件直接上传到仓库根目录**。仓库顶层应当看到 `index.html` 和 `assets/`，不要再套一层文件夹。保留 `.nojekyll` 文件。
3. 提交到 `main` 分支。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment** 中将 **Source** 设为 **Deploy from a branch**，选择 **main** 和 **/(root)**，点击 **Save**。
6. GitHub 完成部署后，在 Pages 设置中查看网址。对于上述用户主页仓库，网址为 `https://你的GitHub用户名.github.io/`。

官方说明：

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

不需要 Node、npm、Jekyll、付费模板或构建步骤。也可使用普通项目仓库，页面中的相对路径同样适用。

## 文件

交付 ZIP 的目录结构：

- `index.html`：完整网页，包括 CSS。
- `assets/Yang_Hu_CV_2026.pdf`：CV。
- `assets/favicon.svg`：浏览器页签图标。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。
- `README.md`：本说明。

Sites 开发仓库中的网页位于 `dist/`；导出到 GitHub 的 ZIP 已将网页文件放在根目录。Sites 的配置与 Git 元数据不包含在 ZIP 中。

## 修改内容

直接编辑 `index.html`，修改后提交，GitHub Pages 会更新网页。

网站内容依据当前 CV、已有研究记录及现有 Google Sites 主页整理，保留其中的笔记链接。Research 中的稿件标为 Draft；GL–GL 与 O–Sp 属于同一个项目的工作。Writings 将原创笔记与 ChatGPT 生成的文章翻译分开列出。原主页 Research 的 draft 链接实际指向 Activities，因此未将其作为稿件下载链接迁移。

### 添加论文或笔记 PDF

将文件放到 `assets/`，在对应条目末尾加入链接，例如：

```html
<p><a href="assets/my-notes.pdf">PDF</a></p>
```

文件名应与链接完全一致，包括大小写。也可以保留目前使用的 Google Drive 文件链接；请确保文件分享设置允许预期读者访问。

### 更新 CV

用新 PDF 替换 `assets/Yang_Hu_CV_2026.pdf`，即可保持现有链接。若更改文件名，同时更新 `index.html` 中的 CV 链接。

### 添加 GitHub 个人链接

确认用户名后，可在简介下方的 `contact` 区域加入：

```html
<p><a href="https://github.com/YOUR_USERNAME">GitHub</a></p>
```

### 浏览

解压后可以直接打开 `index.html` 查看。网页适配手机、平板和桌面，支持键盘导航、减少动态效果偏好及打印。没有外部字体、跟踪脚本或 JavaScript 依赖。

## 内容与设计

姓名、邮箱和 CV 取自 `Yang_Hu_CV_2026`；中文姓名、Writings、Research 稿件标题和 Activities 条目依据现有主页补充，并纠正了明显拼写错误。

现有主页：[Yang Hu](https://sites.google.com/umn.edu/peterhu/home)。

网页不包含未经确认的毕业日期、GitHub 用户名、UMN workshop 日期或稿件下载链接。Google Drive 链接按原主页保留，未修改文件的分享设置。
