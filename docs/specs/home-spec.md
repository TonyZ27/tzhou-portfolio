# Home Page Specification (`/`)

## 1. What the page is about
The Home Page serves as the primary entry point to the portfolio. It utilizes a highly interactive, split-screen desktop layout to showcase "Selected Projects". The left side operates as an interactive index, while the right side acts as a dynamic visual preview driven by user hover states. The design conveys a sleek, editorial, and highly technical brand identity.

## 2. Layout Architecture
The desktop layout is strictly divided into three distinct columns:
- **Left Column (Global Nav):** Fixed width (approx. 60-80px), highly minimalist vertical navigation bar containing the logo ("T.ZHOU") and minimal system icons.
- **Middle Column (Project Index):** A scrollable container holding the section title ("SELECTED PROJECTS"), the list of project items, and a sticky/fixed bottom footer.
- **Right Column (Dynamic Preview):** A fixed, full-height container (usually occupying 50% to 60% of the viewport width) that displays media and tags corresponding to the active/hovered project.

## 3. Displayed Data
- **Global:** Logo text ("T.ZHOU"), Navigation Icons (Home, Portfolio, Contact, etc.).
- **Project Items:** Each item requires an `id`, `index` (e.g., "01/"), `title` (e.g., "AI Voice assistant"), `year` (e.g., "2025-2026"), and a short `description`.
- **Preview Panel:** - *Default:* A placeholder greeting (e.g., 👋 emoji) on a black background.
  - *Hovered:* Project cover image/video, and an array of metadata `tags` (e.g., ["Automotive", "Conversation Design"]).
- **Footer:** Personal avatar/mark, "PRODUCT DESIGNER @2026", and a "SCROLL FOR MORE WORKS" indicator.

## 4. Needed Components
To ensure modularity and clean code, the page must be broken down into the following reusable components:
- `SplitLayout`: The macro-wrapper handling the CSS Grid/Flex layout.
- `VerticalNav`: The fixed left sidebar.
- `ProjectList`: The container managing the hovered state (`activeProjectId`). **Must handle `onMouseLeave` to reset the state.**
- `ProjectItem`: The individual list row. Must accept props for data and `isHovered`, `isBlurred` boolean states.
- `HeroPreview`: The right-hand panel that listens to `activeProjectId` and dynamically swaps media and tags using smooth transition animations.
- `Tag`: The pill-shaped UI for project metadata.

## 5. Different States & Interactions (User Flows)
- **State 0: Default (Idle)**
  - All project items in the Middle Column are clearly visible (opacity 100%, blur 0px).
  - The Right Column displays the default greeting (black background, waving hand emoji).
- **State 1: Hover (Active)**
  - **Trigger:** User's mouse enters a `ProjectItem`.
  - **Action - Hovered Item:** Background changes to a subtle muted/accent color, title text color changes to primary/brand red, and a directional arrow (↗) appears.
  - **Action - Sibling Items:** All other `ProjectItem`s that are *not* hovered smoothly transition to a blurred and reduced opacity state (`backdrop-blur` and `opacity-40`).
  - **Action - Right Panel:** The emoji cross-fades into the project's specific cover image. The project tags slide up/fade in at the bottom left of the image.
- **State 1.5: Mouse Leave (Reset) -> CRITICAL**
  - **Trigger:** User's mouse completely leaves the `ProjectList` container area.
  - **Action:** `activeProjectId` MUST immediately reset to `null`. The Right Column MUST instantly revert to State 0 (Default greeting), and all `ProjectItem`s must return to their clear, default appearance.
- **State 2: Click (Navigation)**
  - Clicking a `ProjectItem` routes the user to `/work/:id`.

## 6. Edge Cases & Responsive Considerations (Crucial)
- **Edge Case 1: The "Hover Gap" Issue:** If the user moves their mouse between two project items, the active state might flicker. *Solution:* The `ProjectList` container must manage the `hoveredId` state with a slight debounce, or the padding of the items must have zero gaps between their hit areas to ensure continuous hover coverage.
- **Edge Case 2: Media Loading:** Images in the Right Column must be preloaded or use a skeleton/fade-in state to prevent jarring flashes when a user rapidly scrubs their mouse over the list.
- **Edge Case 3: Mobile & Tablet Adaptation (No Hover) -> CRITICAL FIX:** - *Problem:* Hover doesn't exist on touch devices.
  - *Solution:* **The entire `HeroPreview` (Right Column) MUST be completely hidden on screens smaller than `lg` (e.g., use Tailwind's `hidden lg:flex` or `lg:block`).**
  - Below the `lg` breakpoint (1024px), the `ProjectList` should render standard vertical cards where the image sits directly above the title and description within the list item itself. Tap acts as the navigation trigger. The blur effect is disabled entirely on mobile.