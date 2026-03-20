# About Page Specification

## 1. Architecture & Layout
The About page utilizes a clean, high-density information layout, divided into two primary sections:
- **Hero Intro Section:** Contains the main greeting and a multi-paragraph biographical introduction. In desktop view, the text block should have a maximum width to ensure optimal reading length. In mobile view, it expands to fill the container.
- **Info Grid Section:** A horizontal three-column layout on desktop that transitions into a single-column vertically stacked layout on mobile devices.

## 2. Component Breakdown (src/components/about/)

### 2.1 `GridSectionHeader`
- **Description:** A reusable header for each of the three columns in the Info Grid.
- **Layout:** Text title with a bottom border separator.

### 2.2 `SkillItem` (Column 1: What I'm good at)
- **Description:** Represents a specific skill area.
- **Layout:** Left-aligned solid color block, followed by stacked title and description text.
- **Data:** Receives a dynamic color value (from data), title, and description.

### 2.3 `TimelineItem` (Column 2: Timeline)
- **Description:** Represents a chronological career or education entry.
- **Layout:** Simple vertically stacked text (Primary title + Secondary subtitle/date). 

### 2.4 `ContactItem` (Column 3: Find Me)
- **Description:** Represents a method of contact or external profile. **This component requires specific interactive states.**
- **Layout:** Left icon + Stacked text (Platform + Handle) + Right action icon.
- **Interactions (CRITICAL):**
  - **Resume:** Right icon should be a "Download" arrow. Clicking triggers file download. A success
  - **Email:** Right icon should be a "Copy" icon. Clicking copies the email address to the clipboard and ideally triggers a lightweight "Copied!" Toast notification.
  - **Links (Github/Linkedin):** Right icon should be an "External Link" arrow. Clicking opens the URL in a new tab (`target="_blank" rel="noopener noreferrer"`).

## 3. Special Styling Requirements
- **Handwriting Font:** The name "Tony" in the Hero Intro uses a distinct handwriting style. This should be implemented by configuring a custom web font (Caveat) mapped to a specific Tailwind class
- **Typography & Spacing:** ALL responsive text scaling, line heights, gaps, and padding values MUST be extracted directly from the Figma design file via MCP. Do not hardcode arbitrary Tailwind spacing or text-size classes.

## 4. Data Separation
- **Requirement:** No textual content should be hardcoded in the JSX.
- **Implementation:** Create `src/data/aboutData.ts` to store the greeting, bio paragraphs, skills (including their specific color codes/classes), timeline events, and contact links. All components must consume this data via Props.