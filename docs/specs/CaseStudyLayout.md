# Case Study Layout & Core Components Specification

## 1. Architecture & Layout (Desktop)
Figma Url: https://www.figma.com/design/h1iCJ4oWOe6wLVUkugNYNY/P-Website?node-id=40004189-12071&t=DmQFWGdiJEzzazHN-11
The Case Study page utilizes an asymmetrical three-column layout:
- **Column 1 (Global):** The existing `VerticalNav`.
- **Centered Content Wrapper (CRITICAL FOR WIDE SCREENS):** The remaining viewport area to the right of the `VerticalNav` must contain a centered wrapper. This ensures that on very wide screens, the Case Study Sidebar and Main Content stay grouped and centered together, preventing the layout from stretching endlessly.
  - **Column 2 (Local Sidebar):** Placed inside the centered wrapper. It must be `sticky` to the top of the viewport (`h-screen`).
  - **Column 3 (Main Content):** Placed inside the centered wrapper alongside the sidebar. It acts as the reading area (`flex-1`, but typically capped around `max-w-4xl` internally). It requires generous horizontal padding (`px-8` or `px-12`) to ensure comfortable reading ergonomics.
- **Column 2 (Case Study Sidebar):** A new `CaseStudySidebar` component(Figma URL:https://www.figma.com/design/h1iCJ4oWOe6wLVUkugNYNY/P-Website?node-id=40004189-11812&t=DmQFWGdiJEzzazHN-11). It must be `sticky` to the top of the viewport (`h-screen`).
- **Column 3 (Main Content):** Placed inside the centered wrapper alongside the sidebar. It acts as the reading area.

## 2. Component: `CaseStudySidebar`
- **Back Button:** Displays "<- Back" at the top. Clicking it should trigger router back navigation (`useNavigate(-1)`).
- **Table of Contents (TOC):** A vertical list of anchor links. Default text is `text-muted-foreground`. The active section should be highlighted (`text-foreground`).

## 4. Mobile Adaptation (CRITICAL)
- Below the `lg` breakpoint (1024px):
  - The `CaseStudySidebar` MUST be transformed into a simple horizontal "<- Back" bar at the top of the page. The TOC links should be hidden to save vertical space.
 