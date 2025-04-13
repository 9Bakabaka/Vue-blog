import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
    {
      text: "Pysio's Home",
      link: "/",
    },
    {
      text: "分类",
      link: "/category/",
      icon: "fa-regular fa-table-cells fa-lg",
    },
    {
      text: "标签",
      link: "/tag/",
      icon: "fa-solid fa-tags",
    },
    {
      text: "归档",
      link: "/article/",
      icon: "fa-solid fa-box-archive",
    },
    {
      text: "星标文章",
      link: "/star/",
      icon: "fa-solid fa-star",
    },
    {
      text: "时间线",
      link: "/timeline/",
      icon: "fa-regular fa-timeline",
    },
    {
      text: "关于",
      link: "/intro.html",
      icon: "fa-regular fa-circle-info",
    },
  ],
  "/posts/": [
    {
      text: "Pysio's Home",
      prefix: "/",
      link: "/posts/",
    },
    {
      text: "日常",
      prefix: "daily",
      children: "structure",
      collapsible: true,
    },
    {
      text: "开发",
      prefix: "develop",
      children: "structure",
      collapsible: true,
    },
    {
      text: "资源分享",
      prefix: "resource",
      children: "structure",
      collapsible: true,
    }
  ],
  "/other/": [
    {
      text: "杂项",
      link: "/other/",
    },
    {
      text: "",
      children: "structure",
    },
  ],
  "/tools/": [
    {
      text: "工具",
      link: "/tools/",
    },
    {
      text: "",
      children: "structure",
    },
  ],
  "/Game/": [
    {
      text: "小游戏",
      link: "/Game/",
    },
    {
      text: "",
      children: "structure",
    }
  ],
});
