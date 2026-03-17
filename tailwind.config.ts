import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        "muted-border": "hsl(var(--muted-border))",
        "muted-primary-foreground": "hsl(var(--muted-primary-foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // All text uses Geist from Figma Local Variables, with Chinese system fonts as fallback
        sans: ['Geist', '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'Inter', 'system-ui', 'sans-serif'],
        // Monospace for numbers from Figma: Menlo
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
        // Handwriting font for "Tony" in About page
        handwriting: ['Caveat', 'cursive'],
      },
      fontSize: {
        // From Figma Text Styles (all use Geist except number-sm)
        'xs': ['11px', { lineHeight: '1', fontWeight: '400' }],       /* xs - Geist Regular */
        'sm': ['13px', { lineHeight: '1.25', fontWeight: '400' }],       /* sm - Geist Regular */
        'base': ['15px', { lineHeight: '1', fontWeight: '400' }],     /* base - Geist Regular */
        'base-medium': ['15px', { lineHeight: '1', fontWeight: '500' }], /* base-medium Geist Medium */
        'lg': ['18px', { lineHeight: '1.25', fontWeight: '500' }],       /* lg - Geist Medium */
        'xl': ['20px', { lineHeight: '1.25', fontWeight: '400' }],       /* xl - Geist Medium */
        '2xl': ['24px', { lineHeight: '1', fontWeight: '400' }],      /* 2xl - Geist Regular */
        '4xl': ['36px', { lineHeight: '1', fontWeight: '500' }],      /* 4xl - Geist Medium */
        'number-sm': ['13px', { lineHeight: '1', fontWeight: '400' }],     /* number-sm - Menlo Regular */
      },
      boxShadow: {
        'pill': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'pill-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'liquid': 'liquid 1s ease-in-out',
        'hourglass-flip': 'hourglass-flip 1s ease-in-out',
        'message-pop': 'message-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'liquid': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'hourglass-flip': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'message-pop': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
