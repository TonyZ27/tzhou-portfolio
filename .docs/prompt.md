# 提示词 2：右侧面板 - 悬停状态 (HoverPoster) 的结构与 Framer Motion 动画编排

**Context:** 请在项目中实现一个名为 `HoverPoster` 的 React 组件，用于双屏布局中右侧的“项目详情展示（Hover）”状态。
**重要前提**：
1. Figma URL: https://www.figma.com/design/h1iCJ4oWOe6wLVUkugNYNY/P-Website?node-id=40003957-4223&t=jjVFXOkhA9dbe6mh-11

2. 本组件的入场与出场动画**必须使用 `framer-motion`** 实现，请废弃手写 CSS keyframes 的方案。

## 1. Data Architecture (数据 Schema)
```typescript
interface Project {
  id: string;          // 唯一标识，用于 AnimatePresence 识别组件切换
  top-specs:Array<{    // 顶部数据栏，包含Featured+数字，项目领域和year
  }>;
  number: string;      // 巨型背景水印数字 (使用项目index，如'01')
  image: string;       // 画幅配图 URL
  bottom-specs: Array<{       // 底部数据栏，包含Role,Focus和阅读时间
  }>;
}
```

## 2. Framer Motion Choreography
请替换传统的 DOM 为 `motion` 组件，并实现以下运动规律。请统一使用该缓动曲线：`ease: [0.22, 1, 0.36, 1]`。

* **全局切换容器 (`AnimatePresence`)**: 
  在调用 `HoverPoster` 的父组件中，需使用 `<AnimatePresence mode="wait">` 包裹，以便在 `project.id` 切换时处理优雅的交叉淡入淡出。

* **Root Wrapper (`motion.div`)**:
  定义父级 `variants` (`initial="hidden"`, `animate="visible"`, `exit="hidden"`)，负责控制内部元素的错落进场。
  - 在 `visible` 状态中配置 `transition: { staggerChildren: 0.15 }`，让内部子节点按 0.15s 的间隔依次触发入场。

* **内部结构与子节点动画编排**:
    * **Background Watermark**: 静态展示，设置 `pointer-events-none`。
    * **Top-specs**: 绑定通用的子节点 Variant（动画路径：从 `y: 10, opacity: 0` 到 `y: 0, opacity: 1`）。
    * **Image Spread Container (`overflow-hidden`)**: 
        * 必须包含 `overflow-hidden` 以切断动画溢出，内部放置 `<motion.img>`。
        * **图片专属揭示动画 (Clip-Path Reveal)**: 
          - `initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.05 }}`
          - `animate={{ clipPath: 'inset(0 0 0 0)', scale: 1 }}`
          - `transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}`
    * **Bottom Specs**: 放置于底部，绑定通用子节点 Variant 错落进场。

请确保代码结构的语义化，处理好边缘情况，并保证动画属性的类型安全。
