import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 指定显示页面
    {
      text: "📒 学习笔记",
      icon: "",
      prefix: "/notes/",
      link: "",
      collapsible: true,
      children: [
        "Java.md",
        {
          text: "C语言",
          icon: "fa-solid fa-code-compare",
          collapsible: true,
          children: ["C.md","Ctext.md"],
        },
         {
          text: "算法与优化",
          icon: "fa-solid fa-brain",
          children: ["GWO.md", "SLP.md"],
        },
        {
          text: "前端相关",
          icon: "fa-brands fa-vuejs",
          children: ["Vue.md", "HTML_CSS.md"],
        },
      ],
    },
    {
      text: "🧪 技术实践",
      icon: "fa-solid fa-flask",
      prefix: "/projects/",
      collapsible: true,
      children: [
        "SpringToSwift.md", // 项目迁移记录
        "WarehouseSim.md",  // 仓储仿真项目
      ],
    },
    {
      text: "🛠️ 工具与配置",
      icon: "fa-solid fa-screwdriver-wrench",
      prefix: "/tools/",
      collapsible: true,
      children: [
        "macSetup.md", // Mac 软件工具
        "VSCode.md",   // VSCode 插件设置
      ],
    },
    {
      text: "💬 随笔与反思",
      icon: "fa-solid fa-pen-nib",
      prefix: "/thoughts/",
      collapsible: true,
      children: [
        "startBlog.md", // 为什么开始写博客
        "thinking.md",  // 最近思考
      ],
    },
  ],
});