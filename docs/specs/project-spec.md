# Project Page Specification (`/projects` or `/works`)

## 1. What the page is about
The Project Page is a comprehensive archive of all projects. It presents a rigorous, data-table-like layout that allows users to filter projects by category. It inherits the focus-blur interaction from the Home page but elevates it with a dynamic, cursor-tracking preview image on the right side, adding a premium, interactive feel.

## 2. Layout Architecture (Desktop)
The layout is a split design, but asymmetrical:
- **Left Column (~66% width including Navbar):** Contain, page header, filter buttons, table header (Project, Company, Type, Year), and the scrollable list of projects.
- **Right Column (Preview Area - ~33% width):** A `fixed` or `sticky` container on the right side. It serves as the bounding box for the preview image.
  - **Image Sizing:** The preview image inside this area must take up approximately `80%` of the Right Column's width and scale proportionally (maintaining aspect ratio).
  - **Alignment:** Align vertical center with the hovering project and horizontally within the Right Column.

## 3. Data Schema Extension (CRITICAL)
The existing `Project` data model must be updated to support this table and the filters. New fields required:
- `company`: string (e.g., "Volvo", "Myself", "Yuanfudao")
- `type`: string (e.g., "HMI Design", "Figma Plugin", "Website Design")
- `category`: string (e.g., "UI/UX", "Development"). **This must EXACTLY match the text on the Filter Chips.**

## 4. Different States & Interactions (User Flows)
### A. Filter Interaction
- **UI:** A horizontal row of chips ("All", "UI/UX", "Development"). Support new categories added when detected new the category in data schema
- **State:** Active chip has a dark background (`bg-accent`). Inactive chips have a transparent background with a border.
- **Logic:** Clicking a chip filters the list below (e.g. If "UI/UX" is clicked, only projects where `project.category === 'UI/UX'` are rendered). "All" renders everything.

### B. Hover & Micro-Interaction (The "Wow" Factor)
- **Trigger:** Mouse enters a list item row.
- **Row State:** The hovered row's text colors (project name, data) highlight to the brand's primary color (`text-primary`). Sibling rows fade and blur.
- **Preview Reveal:** The right-column preview image for the active project fades in.
- **Micro-Interaction (Cursor Tracking):** As the user moves their cursor *within* the hovered list item, the preview image in the right column must perform a subtle translation (slight move on X and Y axes) relative to the mouse movement. This requires an `onMouseMove` event listener calculating the mouse's relative position and applying a dampened `transform: translate(x, y)` to the image.

## 5. Mobile & Edge Cases (CRITICAL FIXES)
- **Mobile First Adaptation (below `lg` breakpoint):**
  - **Hide Preview:** The entire Right Column (Preview Area) MUST be completely hidden (`hidden lg:flex` or similar).
  - **Table Columns:** The "Type" column must be hidden to save space. Render ONLY `Project Name`, `Company`, and `Year` in the row.
  - **Interactions:** Disable the hover blur effect and the cursor-tracking micro-interaction on touch devices.
- **Performance:** Preload the cover images for the filtered list to ensure the hover reveal is instant.