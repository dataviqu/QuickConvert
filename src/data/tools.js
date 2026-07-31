export const toolCategories = [
  {
    id: "pdf",
    label: "PDF Tools",
    tools: [
      { from: "Multiple PDFs", to: "One PDF", slug: "merge-pdf", label: "Multiple PDFs → One PDF" },
      { from: "Images", to: "PDF", slug: "images-to-pdf", label: "Images → PDF" },
      { from: "PDF", to: "JPG", slug: "pdf-to-jpg", label: "PDF → JPG" },
      { from: "PDF", to: "PNG", slug: "pdf-to-png", label: "PDF → PNG" },
      { from: "PDF", to: "Compressed PDF", slug: "compress-pdf", label: "PDF → Compressed PDF" },
      { from: "PDF", to: "Split", slug: "split-pdf", label: "PDF → Split" },
      { from: "PDF", to: "Rotate", slug: "rotate-pdf", label: "PDF → Rotate" },
      { from: "PDF", to: "Delete Pages", slug: "delete-pages-pdf", label: "PDF → Delete Pages" },
      { from: "PDF", to: "Watermark", slug: "watermark-pdf", label: "PDF → Watermark" },
      { from: "PDF", to: "Page Numbers", slug: "page-numbers-pdf", label: "PDF → Page Numbers" },
      { from: "PDF", to: "Reorder Pages", slug: "reorder-pdf", label: "PDF → Reorder Pages" },
      { from: "PDF", to: "Password-Protect", slug: "password-pdf", label: "PDF → Password-Protect" },
      { from: "PDF", to: "Remove Password", slug: "remove-password-pdf", label: "PDF → Remove Password" },
    ],
  },
  {
    id: "documents",
    label: "Documents",
    tools: [
      { from: "PDF", to: "Word", slug: "pdf-to-word", label: "PDF → Word" },
      { from: "Word", to: "PDF", slug: "word-to-pdf", label: "Word → PDF" },
      { from: "PDF", to: "Text", slug: "pdf-to-text", label: "PDF → Text" },
      { from: "Text", to: "PDF", slug: "text-to-pdf", label: "Text → PDF" },
      { from: "PDF", to: "Excel", slug: "pdf-to-excel", label: "PDF → Excel" },
      { from: "PDF", to: "CSV", slug: "pdf-to-csv", label: "PDF → CSV" },
      { from: "PowerPoint", to: "PDF", slug: "ppt-to-pdf", label: "PowerPoint → PDF" },
      { from: "Excel", to: "PDF", slug: "excel-to-pdf", label: "Excel → PDF" },
      { from: "PDF", to: "PowerPoint", slug: "pdf-to-ppt", label: "PDF → PowerPoint" },
      { from: "EPUB", to: "PDF", slug: "epub-to-pdf", label: "EPUB → PDF" },
      { from: "PDF", to: "EPUB", slug: "pdf-to-epub", label: "PDF → EPUB" },
    ],
  },
  {
    id: "image",
    label: "Image Tools",
    tools: [
      { from: "JPG", to: "PDF", slug: "jpg-to-pdf", label: "JPG → PDF" },
      { from: "PNG", to: "PDF", slug: "png-to-pdf", label: "PNG → PDF" },
      { from: "JPG", to: "PNG", slug: "jpg-to-png", label: "JPG → PNG" },
      { from: "PNG", to: "JPG", slug: "png-to-jpg", label: "PNG → JPG" },
      { from: "WebP", to: "PNG", slug: "webp-to-png", label: "WebP → PNG" },
      { from: "WebP", to: "JPG", slug: "webp-to-jpg", label: "WebP → JPG" },
      { from: "PNG", to: "WebP", slug: "png-to-webp", label: "PNG → WebP" },
      { from: "JPG", to: "WebP", slug: "jpg-to-webp", label: "JPG → WebP" },
      { from: "HEIC", to: "JPG", slug: "heic-to-jpg", label: "HEIC → JPG" },
      { from: "HEIC", to: "PNG", slug: "heic-to-png", label: "HEIC → PNG" },
      { from: "SVG", to: "PNG", slug: "svg-to-png", label: "SVG → PNG" },
      { from: "SVG", to: "JPG", slug: "svg-to-jpg", label: "SVG → JPG" },
      { from: "RAW", to: "JPG", slug: "raw-to-jpg", label: "RAW → JPG" },
      { from: "RAW", to: "PNG", slug: "raw-to-png", label: "RAW → PNG" },
    ],
  },
  {
    id: "video",
    label: "Video Tools",
    tools: [
      { from: "MP4", to: "MP3", slug: "mp4-to-mp3", label: "MP4 → MP3" },
      { from: "Video", to: "Compressed Video", slug: "compress-video", label: "Video → Compressed Video" },
      { from: "MOV", to: "MP4", slug: "mov-to-mp4", label: "MOV → MP4" },
      { from: "AVI", to: "MP4", slug: "avi-to-mp4", label: "AVI → MP4" },
      { from: "MKV", to: "MP4", slug: "mkv-to-mp4", label: "MKV → MP4" },
      { from: "WebM", to: "MP4", slug: "webm-to-mp4", label: "WebM → MP4" },
    ],
  },
  {
    id: "audio",
    label: "Audio Tools",
    tools: [
      { from: "MP3", to: "WAV", slug: "mp3-to-wav", label: "MP3 → WAV" },
      { from: "WAV", to: "MP3", slug: "wav-to-mp3", label: "WAV → MP3" },
      { from: "FLAC", to: "MP3", slug: "flac-to-mp3", label: "FLAC → MP3" },
      { from: "AAC", to: "MP3", slug: "aac-to-mp3", label: "AAC → MP3" },
      { from: "M4A", to: "MP3", slug: "m4a-to-mp3", label: "M4A → MP3" },
      { from: "OGG", to: "MP3", slug: "ogg-to-mp3", label: "OGG → MP3" },
      { from: "Text", to: "Speech", slug: "text-to-speech", label: "Text → Speech" },
      { from: "PDF", to: "Audio", slug: "pdf-to-audio", label: "PDF → Audio" },
      { from: "Word", to: "Audio", slug: "word-to-audio", label: "Word → Audio" },
    ],
  },
  {
    id: "ai",
    label: "AI Tools",
    tools: [
      { from: "Image", to: "Text", slug: "image-to-text", label: "Image → Text" },
      { from: "Image", to: "Upscaled Image", slug: "upscale-image", label: "Image → Upscaled Image" },
      { from: "Image", to: "Transparent PNG", slug: "remove-bg", label: "Image → Transparent PNG" },
    ],
  },
  {
    id: "archive",
    label: "Archive Tools",
    tools: [
      { from: "Files", to: "ZIP", slug: "files-to-zip", label: "Files → ZIP" },
      { from: "ZIP", to: "Files", slug: "zip-to-files", label: "ZIP → Files" },
    ],
  },
];

// Flat list of every tool across all categories, handy for lookups by slug.
export const allTools = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => ({ ...tool, categoryId: cat.id, categoryLabel: cat.label }))
);

// Look up a single tool by its slug (used by the /tools/:slug converter page).
export function getToolBySlug(slug) {
  return allTools.find((tool) => tool.slug === slug) || null;
}

// A broad set of formats offered in the "from" / "to" dropdowns of the generic
// drop-zone widget (used on the homepage and on tool pages that aren't tied to
// one specific conversion).
export const commonFormats = [
  "PDF", "JPG", "PNG", "WebP", "HEIC", "SVG",
  "Word", "PowerPoint", "Excel", "Text", "EPUB", "CSV",
  "MP4", "MP3", "WAV", "ZIP",
];

export const popularConversions = [
  "PDF → Word", "Word → PDF", "Multiple PDFs → One PDF", "PDF → Split",
  "PDF → Compressed PDF", "PDF → JPG", "JPG → PNG", "PNG → JPG",
  "Images → PDF", "PDF → Watermark", "PDF → Password-Protect", "PDF → Excel",
  "MP4 → MP3", "Text → Speech", "Image → Transparent PNG", "Image → Upscaled Image",
];
