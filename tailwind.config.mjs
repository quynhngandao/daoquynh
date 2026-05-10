/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    // ── Breakpoints ──────────────────────────────────────
    // mobile:        0px – 767px   (base, no prefix)
    // sm:          640px            (large phone helper)
    // md:          768px – 1023px   (tablet)
    // lg:         1024px – 1439px   (desktop)
    // xl:         1440px+           (large desktop)
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── Sky palette ──────────────────────────
        sky: 'var(--sky)',
        'sky-deep': 'var(--sky-deep)',
        'sky-light': 'var(--sky-light)',

        // ── Navy / blue ──────────────────────────
        'navy-cloud': 'var(--navy-cloud)',
        navy: 'var(--navy)',
        'navy-deep': '#0b2f6f',
        'navy-ink': '#17325d',

        // ── Sky tints ────────────────────────────
        'sky-frost': '#eef7ff',
        'sky-border': '#d6e8f8',
        'sky-wash': '#f7fbff',

        // ── Neutrals ─────────────────────────────
        white: 'var(--white)',
        ink: 'var(--ink)',
        'gray-muted': 'var(--gray-muted)',

        // ── Character / warm tones ────────────────
        skin: 'var(--skin)',
        'skin-shadow': 'var(--skin-shadow)',
        blush: 'var(--blush)',
        brown: 'var(--brown)',

        // ── Accent ───────────────────────────────
        bubble: '#FEE9A8',
      },
    },
  },
  plugins: [],
};
