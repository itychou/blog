import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/blog/",
  title: "大师兄聊编程",
  description: "大师兄知识分享，和你一起聊编程",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    heading: "/logo.png",
    author: "itychou",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/itychou/blog",
    docsBranch: "master",
    docsDir: "blog",
    lastUpdatedText: "最近更新",
    // series 为原 sidebar
    series: {
      "/docs/itychou/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "分类", link: "/categories/reco/1/" },
      { text: "标签", link: "/tags/zhinan/1/" },
      { text: "归档", link: "/timeline" },
      {
        text: "文档",
        children: [
          { text: "介绍", link: "/docs/itychou/theme" }
        ],
      },
      { text: "工具", link: "/tools/tools.md" },
    ],
    bulletin: {
      // body: [
      //   {
      //     type: "text",
      //     content: `
      //       最新内容：<a href="/blogs/category1/2019/092101.html">证书追加</a>
      //       `,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      // ],
    },
    commentConfig: {
      type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
  }),
  // debug: true,
});
