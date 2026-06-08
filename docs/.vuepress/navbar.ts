import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "博客", icon: "fa-solid fa-blog", link: "/blog" },
  {
    text: "技术实践",
    icon: "fa-solid fa-flask",
    link: "/projects/",
  },
  {
    text: "学习笔记",
    icon: "fa-solid fa-book",
    link: "/study/",
  },
  {
    text: "AI 日报",
    icon: "fa-solid fa-fire",
    link: "https://ai-trending.254490636.workers.dev",
  },
]);
