# QuickConvert Frontend

A fully responsive, animated React frontend for QuickConvert — a browser-first file converter.

## Tech Stack
- **Vite** — build tool
- **React 18** — UI framework
- **Tailwind CSS** — styling
- **Framer Motion** — animations & page transitions
- **React Router v6** — routing
- **React Dropzone** — drag-and-drop file uploads
- **Lucide React** — icons

## Pages
| Route | Page |
|---|---|
| `/` | Home (hero animation + drop zone) |
| `/tools` | All Tools catalog |
| `/tools/:slug` | Generic Converter (dynamic) |
| `/tools/pdf-suite` | PDF Merge Suite |
| `/tools/text-to-speech` | TTS Tool |
| `/pricing` | Pricing (4 tiers) |
| `/signup` | Sign Up |
| `/login` | Log In |
| `/privacy` | Privacy Policy |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Key Design Decisions
- **Brand color**: `#E8573C` (orange) — used for CTAs, accent text, hover states
- **Background**: `#FAFAF8` (warm off-white) — matches the prototype PDF
- **Hero**: Space animation with floating astronauts, file icons, galaxy vortex (matches client JPEG)
- **Privacy panel**: Live "0B uploaded" counter shown on every converter page
- **No backend needed**: All conversions are simulated client-side (spinner → download button)

## Connecting to FastAPI (when ready)
Replace the `setTimeout` mock in `DropZone.jsx` with:
```js
const formData = new FormData()
files.forEach(f => formData.append('files', f))
const res = await fetch(`${import.meta.env.VITE_API_URL}/convert`, {
  method: 'POST', body: formData
})
const blob = await res.blob()
// trigger download
```
