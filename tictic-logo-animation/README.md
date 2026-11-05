# TicTic Logo Animation

A self-contained React + Vite demo of a five-second animated TicTic bus-ticket logo. Uses inline SVG and CSS keyframes; no external animation libraries are needed.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build
```bash
npm run build
npm run preview
```

## Use in an existing React app
Copy `src/components/TicTicLogo.jsx` and `src/components/TicTicLogo.css` into your app. Import it:
```jsx
import TicTicLogo from "./components/TicTicLogo";

<TicTicLogo />       // compact navbar logo
<TicTicLogo intro /> // animated logo sequence
```

For the intro variant, pass `onIntroComplete` if you want to hide the intro overlay after it completes:
```jsx
<TicTicLogo intro onIntroComplete={() => setShowIntro(false)} />
```

The demo includes an overlay intro and a replay button. Keep your existing application UI and replace only the logo component when integrating.

## Notes
- Logo colors match the TicTic pastel sage, peach, cream, and charcoal theme.
- Reduced-motion preferences are respected.
- This is a source-code animation, not a video file.
