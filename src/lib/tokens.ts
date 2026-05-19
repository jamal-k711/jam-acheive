export const tokens = {
  colors: {
    bg: { base: '#08090C', surface: '#0F1117', elevated: '#161922' },
    red: { DEFAULT: '#E63946', dim: 'rgba(230, 57, 70, 0.12)', glow: 'rgba(230, 57, 70, 0.25)' },
    indigo: { DEFAULT: '#6366F1', dim: 'rgba(99, 102, 241, 0.12)', glow: 'rgba(99, 102, 241, 0.3)' },
    text: { primary: '#F0F2F7', secondary: '#8892A4', muted: '#4A5568' },
    border: { DEFAULT: 'rgba(255, 255, 255, 0.06)', hover: 'rgba(230, 57, 70, 0.3)' },
    glass: { bg: 'rgba(15, 17, 23, 0.6)', border: 'rgba(255, 255, 255, 0.08)' },
  },
  fonts: {
    display: "'Cabinet Grotesk', sans-serif",
    body: "'Geist', sans-serif",
    mono: "'Geist Mono', monospace",
  },
  radii: { card: '16px', pill: '100px' },
  container: '1200px',
  gutter: '24px',
  sectionGap: '140px',
} as const;
