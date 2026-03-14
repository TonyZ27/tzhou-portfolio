# Global Navigation Specification (`Navbar`)

## 1. What the component is about
The Navbar is the global routing and persistent action container for the portfolio. It requires a drastic structural change between desktop and mobile to ensure optimal ergonomics. It contains primary routing tabs and secondary global actions (AI Chatbot & Translation).

## 2. Displayed Data & Functionality mapping
**Primary Navigation (Routing):**
- **Home (🏠):** Routes to `/`.
- **Works (💼):** Routes to `/works` (pending creation).
- **About (✉️):** Routes to `/about` (pending creation).

**Secondary Actions (Global Buttons):**
- **AI Chatbot (🤖):** Trigger for a future conversational UI.
- **Translate (文A):** Toggle for EN/ZH language switch.
*(⚠️ CRITICAL RULE: Both AI Chatbot and Translate are STRICTLY UI PLACEHOLDERS right now. Do NOT implement any state logic, modal popups, or translation functions for them unless explicitly instructed in future phases.)*

## 3. Layout Architecture & Responsive Breakpoints
The layout fundamentally transforms at the `lg` (1024px) breakpoint.

### Desktop Layout (`lg` and above)
- **Position:** Fixed to the left edge of the viewport (Vertical Sidebar), taking full height (`h-screen`).
- **Structure:**
  - **Top:** Logo ("T.ZHOU") rotated vertically or displayed horizontally depending on width.
  - **Middle:** Primary Navigation icons arranged vertically.
  - **Bottom:** Secondary Actions (AI, Translate) arranged vertically at the bottom of the sidebar.
- **Interaction:** Hovering over icons shows a color change (using defined `primary` colors). The active route icon should be distinctly highlighted.

### Mobile Layout (below `lg`) - CRITICAL UPDATE
The vertical sidebar is completely dismantled and split into two separate fixed elements:
1. **Top Header (`sticky top-0`):**
   - Left side: Logo ("T.ZHOU") as text.
   - Right side: Secondary Actions (AI Chatbot 🤖 and Translate 文A) icons placed horizontally.
2. **Bottom Tab Bar (`fixed bottom-0`):**
   - Replaces the default mobile top navigation.
   - Contains the three Primary Navigation items (Home, Works, About) spread evenly across the bottom.
   - **UI Requirement:** Must display BOTH the icon and the text label (e.g., "Home") stacked vertically for each tab to ensure clear touch targets. Must include a top border or subtle shadow to separate from page content.

## 4. Different States
- **Active Route:** The current page tab in the Primary Navigation should be highlighted ( Icon/Text becomes `aceent` while others are `text-muted-foreground`).
- **Safe Area (Mobile):** The Bottom Tab Bar must account for iOS safe area padding at the bottom (`pb-safe` or standard `pb-4` to avoid overlapping with the iPhone home indicator).