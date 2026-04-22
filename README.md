# 🚀 Page Selector App – Tech Stack Overview

## 🧰 Core Technologies

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Hooks (`useState`, `useCallback`)
- **Fonts**: Montserrat (Google Fonts import)

---

## 🧩 App Structure

### 1. UI Layer

- Main layout is in `src/components/PageSelector.tsx`
- Reusable checkbox is in `src/components/Checkbox.tsx`
- Reusable button is in `src/ui/Button.tsx`
- Styling values are extracted in `src/components/Checkbox.styles.ts`

### 2. State & Behavior

- Page selection logic is in `src/hooks/usePageSelector.ts`
- Uses `Set<number>` for selected page IDs
- Supports:
  - Toggle single page
  - Toggle all pages
  - Derived `allPagesSelected` state

### 3. Design System Decisions

- Checkbox interaction uses press state via `data-pressed` attribute
- Checkbox uses SVG mark and `strokeWidth` for consistent rendering
- Focus/press ring is softened with `#DBEAFE`
- Container, checkbox, and button dimensions follow the provided design values

---

## ✅ Key Features

- **Custom Checkbox States + Conditional Rendering**: Checked, unchecked, and indeterminate states are conditionally rendered with hover/press visuals

---


## ▶️ Run Locally

```bash
npm install
npm run dev
```
