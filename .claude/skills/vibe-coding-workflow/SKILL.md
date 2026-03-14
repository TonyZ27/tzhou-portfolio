---
name: vibe-coding-workflow
description: Executes the strict Design-to-Code workflow for the UX portfolio. Use this whenever building new UI components, extracting Figma design tokens, assembling pages, or conducting responsive design audits.
---

When executing development tasks for this project, always follow these sequential rules:

### 1. Read Page Specification & Context (Initialization)
* **Locate Specs**: Read the relevant Page Specification document inside the `docs/specs/` folder (e.g., `docs/specs/home-spec.md`) before writing any code.
* **Understand Architecture**: Analyze the page architecture, component functions, and intended user interactions to ensure full alignment with the UX intent.

### 2. Dynamic Token Extraction (Continuous)
* **Figma MCP**: Use the Figma MCP to read the provided design link for the specific component or screen.
* **Proactive Update**: If a new design decision (color, typography style, spacing variation) is identified that doesn't exist in our foundation, automatically translate it to HSL/rem formats and inject it into `src/index.css` and `tailwind.config.js`. Do not ask for explicit permission to update tokens.
* **Map Intent**: Interpret the design intent (e.g., Auto Layout settings) and map them directly to Tailwind Flexbox/Grid utility classes using the strict 4px grid rule (e.g., 16px = `gap-4`).

### 3. Build Components in Isolation
* **Isolate & Build**: Build the specific UI element using React, shadcn/ui, and Tailwind CSS.
* **Responsive Sizing**: Use Tailwind's relative units (`rem`/`em`) instead of fixed pixels for sizing and spacing.
* **Accessibility**: Ensure all interactive elements (buttons, inputs, links) have a minimum touch target size of 44x44px.
* **Refactor**: Ensure the component is clean, modular, and maintains a clear separation of concerns.

### 4. Build Mobile-First Screens
* **Mobile First**: Always start by building the mobile layout (320-375px) first, prioritizing essential content.
* **Progressive Enhancement**: Progressively enhance the layout for larger screens using standard framework breakpoints (`sm:`, `md:`, `lg:`).
* **Fluid Layouts**: Implement fluid layouts using flexbox, grid, or percentage-based widths (`w-full`, `max-w-screen-xl`) rather than fixed widths.
* **Assembly**: Assemble the screen strictly using the modular components built in the previous step.

### 5. Responsive Design Audit & Refactoring
* **QA Audit**: Act as a QA Engineer to test the generated screen across key breakpoints: 375px (Mobile), 768px (Tablet), 1024px (Laptop), and 1440px (Desktop).
* **Typography & Flow**: Verify typography is readable without zooming (minimum 16px/1rem for body text). Ensure absolutely no horizontal scrolling on mobile, no overlapping elements, and no truncated text.
* **Assets**: Verify images are optimized for different sizes.
* **Final Polish**: Review the code against a senior UI engineer checklist (architectural issues, hover/active states, and smooth transition animations), and automatically execute fixes for any violations found.