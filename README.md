# gaylord-icons

Animated icon components for React and Next. Hover plays the animation that belongs to that icon.

```bash
npm install gaylord-icons
```

React 18 or newer is required. `lottie-web` is installed with the package for the Lordicon set.

## Lordicon

413 system outline icons. The animation is a Lottie SVG, so size and color can be changed.

```jsx
import { Magnifier } from "gaylord-icons/lordicon";

export function Example() {
  return <Magnifier size={32} color="#c026d3" accent="#111827" title="Search" />;
}
```

| Prop | What it does |
| --- | --- |
| `size` | Number (pixels) or any CSS size. Default fills the parent. |
| `color` | Replaces the main ink, `#121331`, inside the animation. |
| `accent` | Replaces any other non-white color in that animation. |
| `state` | Plays a named state from the icon file. Omit it to use the icon's default state. |
| `className`, `style` | Passed to the icon box. |
| `title` | Accessible name. |

Pointer enter plays the default state. Pointer leave leaves a morph icon; other states play through.

Import one icon directly:

```jsx
import { Magnifier } from "gaylord-icons/lordicon/Magnifier";
```

## Unicorn icons

486 outline icons. Pointer enter plays that icon's webm. Pointer leave pauses and returns to the first frame. The still image is the icon's svg.

```jsx
import { Briefcase } from "gaylord-icons/unicorn";

export function Example() {
  return <Briefcase size={48} title="Briefcase" />;
}
```

| Prop | What it does |
| --- | --- |
| `size` | Number (pixels) or any CSS size. Default fills the parent. |
| `className`, `style` | Passed to the icon box. |
| `title` | Accessible name. |

The moving image is a video, so `color` cannot repaint its strokes. `size` still changes the box.

```jsx
import { Briefcase } from "gaylord-icons/unicorn/Briefcase";
```

41 names exist twice in the source list. The second component has a `2` suffix, for example `Briefcase` and `Briefcase2`. Both play the same animation. `24-hour-delivery` is `Icon24HourDelivery` because a component name cannot start with a number. Its label is still "24 hour delivery".

## Next.js

The players include `"use client"`. Import an icon from a client component, or render it from a server component. No extra Next config is required.

## Local catalog

```bash
npm install
npm run dev
```

The dev page has two tabs, Iconography and Unicorn icons. Search filters each tab on its own.
