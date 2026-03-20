作为一个遵循 Vibe Coding 工作流的 AI 工程师，你需要帮我重构个人 UX 作品集网站 (tzhou-portfolio) 的项目跳转逻辑。

【核心目标】
我不再需要为大多Developmentn项目搭建专属的 Case Study 内部页面。我希望当用户在Works页面列表点击这些特定的项目时，能够直接跳转到外部链接（如 GitHub、Figma Community、Chrome Web Store 等）。

【数据集成方案 (project.ts 更新)】
1. 检索并分析当前的 `project.ts` 以及现有的项目数据类型（Type/Interface）。
2. 在现有的类型定义中新增字段，以支持外部跳转逻辑。建议方案如下（你可以根据现有代码进行微调）：
   - 增加一个可选字段 `externalLink?: string`。
   - 增加一个可选字段 `platform?: 'figma' | 'github' | 'browser' | 'default'`（用于后续在 UI 上渲染对应的平台 Icon）。
3. 并在 `project.ts` 中补充 1-2 个使用 `externalLink` 的 Mock 数据，用来测试。

【UI 与交互改造需求】
1. 检索现有的“项目展示卡片”组件（通常在 components 目录下，可能是 ProjectCard 或类似名称）。
2. 修改该组件的路由包裹逻辑：
   - 条件判断：如果该项目数据包含 `externalLink`，则使用 `<a>` 标签包裹卡片，并设置 `target="_blank" rel="noopener noreferrer"` 进行外部跳转。
   - 如果没有 `externalLink`，则保持原有的内部路由逻辑（如使用 react-router-dom 的 `<Link>` 跳转到 Case Study 页面）。
3. 视觉反馈（Design Foundation）：
   - 保持卡片原有的 Hover 交互质感和布局不变。
   - 如果是外部链接项目，请在卡片的合适位置（比如标题旁边或卡片右上角）增加一个极其轻量的视觉暗示，例如对应平台的 Icon（Figma/GitHub/Chrome）或一个通用的“右上箭头”外链 Icon。图标风格需复用现有的 Lucide React 或项目内已有的 Icon 库。

【执行步骤】
1. 读取并修改 `project.ts` 的类型定义。
2. 找到对应的卡片组件进行条件渲染重构。
3. 确保样式完全继承现有的 Tailwind CSS 和 shadcn/ui 规范，不破坏原有的干净视觉呈现。