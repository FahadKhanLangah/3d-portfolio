/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070913',
          card: '#0c1024',
          cardHover: '#131938',
          border: 'rgba(0, 240, 255, 0.15)',
          borderAmber: 'rgba(245, 158, 11, 0.25)',
          cyan: '#00f0ff',
          teal: '#00c6a7',
          amber: '#f59e0b',
          purple: '#8b5cf6',
          pink: '#ec4899',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.35)',
        'glow-teal': '0 0 30px rgba(0, 198, 167, 0.3)',
        'glow-amber': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
