import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 指定显示页面
    {
      text: "📚 课程笔记",
      icon: "",
      prefix: "/study/",
      link: "",
      collapsible: true,
      children: [
        "Java.md",
        "C.md",
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
        "AI_Agent/AgentProject.md",
      ],
    },
    {
      text: "🔧 技术笔记",
      icon: "",
      prefix: "/tech/",
      collapsible: true,
      children: [
        {
          text: "AI 相关",
          icon: "",
          prefix: "/tech/AI_Agent/",
          collapsible: true,
          children: ["Chroma.md", "LangChain.md", "GeminiAPI.md"],
        },
        "openclaw.md",
        "redis.md",
        "go.md",
        "flutter.md",
      ],
    },
  ],
});
