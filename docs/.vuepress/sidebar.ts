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
          icon: "",
          prefix: "/notes/C_Language/",
          collapsible: true,
          children: ["C.md","Ctext.md"],
        },
         /*{
          text: "算法与优化",
          icon: "",
          prefix: "/notes/Optimization/",
          children: ["GWO.md", "SLP.md"],
        },
        {
          text: "前端相关",
          icon: "",
          prefix: "/notes/Frontend/",
          children: ["Vue.md", "HTML_CSS.md"],
        },*/
      ],
    },
    {
      text: "🧪 技术实践",
      icon: "",
      prefix: "/projects/",
      collapsible: true,
      children: [
        "Warehouse.md",  // 仓储仿真项目
        "Coze.md", // Coze Studio 扣子开源项目本地部署
        {
          text: "AI Agent 决策项目",
          icon: "",
          prefix: "/projects/AI_Agent/",
          collapsible: true,
          children: ["AgentProject.md", "Chroma.md", "LangChain.md", "GeminiAPI.md"],
        }
      ],
    },
    {
      text: "🛠️ 工具与配置",
      icon: "",
      prefix: "/tools/",
      collapsible: true,
      children: [
       // "macSetup.md", // Mac 软件工具 （TODO）
       // "VSCode.md",   // VSCode 插件设置
        "redis.md",  // Redis 教程
        "go.md", // Go语言 
        "flutter.md", // Flutter 教程
      ],
    },
    /*{
      text: "💬 随笔与反思（TODO）",
      icon: "",
      prefix: "/thoughts/",
      collapsible: true,
      children: [
        "startBlog.md", // 为什么开始写博客
        "thinking.md",  // 最近思考
      ],
    },*/
  ],
});