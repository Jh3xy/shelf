# 📚 Shelf | Master Style Guide

This document serves as the **Single Source of Truth** for the "Shelf" Idea Management Web App. Use the variables defined here to maintain consistency across the project.

---

## 🎨 1. Theme Variables (HSLA)
Copy this into your main CSS file (e.g., `style.css`).

```css
:root {
    /* --- LIGHT THEME (Google Antigravity Inspired) --- */
    --bg: hsla(210, 30%, 96%, 1);           /* Soft blue-gray background */
    --surface: hsla(0, 0%, 100%, 1);        /* Pure white for cards */
    --primary: hsla(232, 82%, 71%, 1);      /* Periwinkle accent */
    --primary-muted: hsla(232, 82%, 85%, 1); 
    --secondary: hsla(220, 15%, 65%, 1);    /* Soft gray */
    
    --text-main: hsla(210, 30%, 24%, 1);    /* Deep charcoal */
    --text-sub: hsla(210, 15%, 45%, 1);     /* Medium gray */
    --border: hsla(210, 20%, 90%, 1);
    --shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05);

    /* --- TYPOGRAPHY --- */
    --ff-primary: 'Google Sans', 'Inter', sans-serif;
    --fs-md: 2rem;      /* 32px - Page Titles */
    --fs-sm: 1.5rem;    /* 24px - Section Headers */
    --fs-base: 1rem;    /* 16px - Body Text */
    --fs-xs: 0.875rem;  /* 14px - Metadata/Tags */
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 600;

    /* --- SPACING SYSTEM --- */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;

    /* --- RADIUS --- */
    --radius-lg: 24px;   /* Containers */
    --radius-md: 12px;   /* Cards/Buttons */
    --radius-pill: 9999px;

    /* --- ANIMATION --- */
    --transition: 0.2s ease;
}
````

## /* --- PASTEL DARK MODE --- */
```css
body.dark-theme {
    --bg: hsla(210, 25%, 12%, 1); 
    --surface: hsla(210, 25%, 18%, 1);
    --primary: hsla(212, 45%, 78%, 1);
    --text-main: hsla(210, 20%, 94%, 1);
    --text-sub: hsla(210, 10%, 75%, 1);
    --border: hsla(210, 20%, 25%, 1);
    --shadow: 0 8px 24px hsla(0, 0%, 0%, 0.2);
}
```

## 🗺 2. Element-to-Variable Mapping

---------------------------------

Use this table to know exactly which variable to apply to your HTML elements.

### Colors & Surfaces

| UI Element | CSS Variable |

| :-- | :-- |

| App Background | `--bg` |

| Sidebar, Cards, Search Bar | `--surface` |

| Main Titles, Active Icons | `--text-main` |

| Supporting Text, Descriptions | `--text-sub` |

| Dividers, Card Outlines | `--border` |

| Primary Buttons, FAB, Active Links | `--primary` |

### Spacing & Layout

| UI Element | Property | CSS Variable |

| :-- | :-- | :-- |

| Main Content Area | `padding` | `--space-xl` |

| Idea Cards, Modals | `padding` | `--space-lg` |

| Sidebar Links, Search Bar | `padding` | `--space-md` |

| Button Internal Padding | `padding` | `--space-sm --space-lg` |

### Shapes (Radius)

| UI Element | CSS Variable |

| :-- | :-- |

| Main Panels, Sidebar, Modals | `--radius-lg` |

| Idea Cards, Action Buttons | `--radius-md` |

| Search Bar, Filter Chips | `--radius-pill` |

* * * * *

### ⚡ 3. Interactive States (UX)

----------------------------

Apply these to ensure the app feels responsive and high-fidelity.

### Hover States

-   Buttons/Links: `filter: brightness(1.1);`

-   Idea Cards: `transform: translateY(-2px); border-color: var(--primary);`

-   Transition: `all var(--transition);`

### Active States (The Click)

-   All Clickable Items: `transform: scale(0.96);`

### Focus States (Accessibility)

-   Inputs/Buttons: `outline: 3px solid var(--primary); outline-offset: 2px;` (Use `:focus-visible`)

* * * * *

### 🧱 4. Component Quick-Reference

-------------------------------

### Idea Card

```

.card {

    background: var(--surface);

    border: 1px solid var(--border);

    padding: var(--space-lg);

    border-radius: var(--radius-md);

    box-shadow: var(--shadow);

}

```

### Search Bar (Pill)

```

.search-bar {

    background: var(--surface);

    border-radius: var(--radius-pill);

    padding: var(--space-sm) var(--space-md);

    border: 1px solid var(--border);

}

```