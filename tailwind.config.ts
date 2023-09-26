import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        "4xl": "3.5rem",
      },
      keyframes: {
        bounceRight: {
          '0%, 100%': { transform: 'translate(3px)' },
          '50%': { transform: 'translate(-3px)' },
        }
      },
      animation: {
        bounceRightAnim: 'bounceRight 1s ease-in-out infinite',
      }
    },

  },
  plugins: [
    typography,
  ],
}
export default config
