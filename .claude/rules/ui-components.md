
---
description: Guidelines for implementing UI components, design tokens, and ensuring visual parity.
paths:
  - "src/components/**/*.tsx"
  - "src/ui/**/*.tsx"
  - "src/styles/**/*.css"
---

# UI Implementation & Design System Rules

## Component Organization
- Place UI components in the designated design system directory.
- Follow established component naming conventions.
- Avoid inline styles unless strictly necessary for dynamic values.

## Design System Integration
- **Reuse Over Recreation:** Always use existing components (buttons, inputs, typography) from the project's design system before creating new ones. When a matching component exists, extend it with a new variant rather than duplicating functionality.
- **Single Source of Truth:** Map Figma design tokens to our project's design system tokens (e.g., color system, typography scale, spacing tokens).
- **Avoid Hardcoding:** Extract raw values into constants or design tokens. 

## Code Quality & Accessibility
- Keep components composable and reusable.
- Add TypeScript types for all component props.
- Include JSDoc comments for exported components.
- Document any deviations from the original design (e.g., for technical constraints or WCAG accessibility requirements) in the code comments.

## Handling Token Conflicts
When conflicts arise between our established design system tokens and a specific Figma mockup, prefer our design system tokens to maintain global consistency, but adjust spacing or sizes minimally to match the visual intent.

## Mobile Adaptation
- **Always implement mobile alongside desktop.** Any time a UI component or layout is added or modified, the corresponding mobile adaptation must be implemented in the same change — never leave a component desktop-only.
- Use Tailwind responsive prefixes (`lg:`, `md:`, `sm:`) to handle breakpoints. The project uses `lg:` as the desktop/mobile split (desktop = `lg` and above, mobile = below `lg`).
- For components that only appear in the desktop layout (e.g., inside `hidden lg:block` wrappers), verify whether a mobile equivalent exists and add or update it accordingly.
- Test both viewports before marking a task complete.