import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font--font-montserret)', ...fontFamily.sans],
        secondary: ['var(--font--font-ptSerif)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
