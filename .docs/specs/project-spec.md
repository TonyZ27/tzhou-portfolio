# Project Page Specification

## 1. What the page is about
The Project Page is a comprehensive archive of all projects. It presents a rigorous, data-table-like layout that allows users to filter projects by category. It inherits the focus-blur interaction from the Home page but elevates it with a dynamic, cursor-tracking preview image on the right side, adding a premium, interactive feel. **[MODIFIED]** It now supports three types of project states: standard internal case studies, external links (e.g., plugins), and inactive/WIP projects.

## 2. Layout Architecture (Desktop)
The layout is a split design, but asymmetrical:
- **Left Column (~66% width including Navbar):** Contain, page header, filter buttons, table header (Project, Company, Type, Year), and the scrollable list of projects.
- **Right Column (Preview Area - ~33% width):** A `fixed` or `sticky` container on the right side. It serves as the bounding box for the preview image.
  - **Image Sizing:** The preview image inside this area must take up approximately `80%` of the Right Column's width and scale proportionally (maintaining aspect ratio).
  - **Alignment:** Align vertical center with the hovering project and horizontally within the Right Column.

## 3. Data Schema Extension (CRITICAL) **[MODIFIED]**
The existing `Project` data model must be updated to support this table, the filters, and the new routing/status logic. New fields required:
- `company`: string (e.g., "Volvo", "Myself", "Yuanfudao")
- `type`: string (e.g., "HMI Design", "Figma Plugin", "Website Design")
- `category`: string (e.g., "UI/UX", "Development"). **This must EXACTLY match the text on the Filter Chips.**
- **[NEW]** `externalLink?: string`: (Optional) URL for projects hosted outside the portfolio (e.g., GitHub, Figma Community).
- **[NEW]** `inactive?: boolean`: (Optional) Flag to indicate if the case study is incomplete or coming soon.

## 4. Different States & Interactions (User Flows) **[MODIFIED]**
please use MCP to read the figma URL for the WorksListItem for details: https://www.figma.com/design/h1iCJ4oWOe6wLVUkugNYNY/P-Website?node-id=40004103-3595&t=CJAYYvwCKvSEuzdU-11


### A. Row Types, Routing & UI Status **[NEW]**
The list item row must render differently based on the project's data schema:
1. **Internal Page (Default):** - **Routing:** Navigates to the internal case study page (`/projects/:id`).
   - **UI:** Standard styling.
2. **External Link (`externalLink` exists):**
   - **Routing:** Opens the `externalLink` in a new tab (`target="_blank" rel="noopener noreferrer"`).
   - **UI:** Add an "External Link" icon (`ExternalLink` from lucide-react) next to the Project Title field.
3. **Inactive (`inactive === true`):**
   - **Routing:** Disabled (Not clickable).
   - **UI:** Add 30% Opacity to text color for the entire row. Add a "Lock" icon next to the Project Title. 
   - **Data Override:** The "Type" column text must be forcibly rendered as `"COMING SOON"`, overriding the original data.

### B. Filter Interaction
- **UI:** A horizontal row of chips ("All", "UI/UX", "Development"). Support new categories added when detected new the category in data schema.
- **State:** Active chip has a dark background (`bg-accent`). Inactive chips have a transparent background with a border.
- **Logic:** Clicking a chip filters the list below. "All" renders everything.

### C. Hover & Micro-Interaction (The "Wow" Factor) **[MODIFIED]**
- **Trigger:** Mouse enters a list item row. **[NEW] INACTIVE projects MUST NOT trigger any hover interactions.**
- **Row State:** The hovered row's text colors highlight to the brand's primary color (`text-primary`). Sibling rows fade and blur.
- **Preview Reveal:** The right-column preview image for the active project fades in.
- **Micro-Interaction (Cursor Tracking):** As the user moves their cursor *within* the hovered list item, the preview image in the right column must perform a subtle translation (slight move on X and Y axes) relative to the mouse movement. Calculate relative position on `onMouseMove` and apply a dampened `transform: translate(x, y)`.

## 5. Mobile & Edge Cases (CRITICAL FIXES)
- **Mobile First Adaptation (below `lg` breakpoint):**
  - **Hide Preview:** The entire Right Column (Preview Area) MUST be completely hidden (`hidden lg:flex` or similar).
  - **Table Columns:** The "Type" column must be hidden to save space. Render ONLY `Project Name`, `Company`, and `Year` in the row.
  - **Interactions:** Disable the hover blur effect and the cursor-tracking micro-interaction on touch devices.
- **Performance:** Preload the cover images for the filtered list to ensure the hover reveal is instant.