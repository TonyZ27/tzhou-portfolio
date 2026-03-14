# 项目全局设定
- 这是一个 Vite + React + TypeScript 的 UX/Product Designer 个人作品集网站。
- UI 组件库优先使用 shadcn/ui。
- 所有的代码生成必须严格遵循 Tailwind CSS 的 utility classes。

# 设计规范 (Design Tokens)
- 间距与网格：严格遵循 4px 栅格系统。Tailwind 的 spacing token 必须使用基础倍数（如 p-4, m-8, gap-6）。绝不允许使用硬编码的任意值（如 p-[18px]）。
- 颜色系统：基于全局 CSS Variables 实现。不得使用 bg-blue-500 这类默认色阶，必须使用语义化 token：bg-background, text-foreground, bg-primary, bg-muted 等。
- 响应式断点：遵循 Tailwind 默认规则 (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)。采用移动端优先策略（默认无前缀类名为移动端样式）。
- 交互细节：注重组件的 Hover, Focus, Active 状态，并辅以自然平滑的过渡动画 (transition-all duration-200 等)。