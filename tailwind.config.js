/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* green-50 */
        input: "var(--color-input)", /* green-50 */
        ring: "var(--color-ring)", /* green-700 */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* green-700 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* blue-900 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* cyan-600 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-100 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gray-100 */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        brand: {
          green: "var(--color-brand-green)", /* green-400 */
          blue: "var(--color-brand-blue)", /* blue-500 */
          dark: "var(--color-brand-dark)", /* slate-700 */
        },
        conversion: {
          accent: "var(--color-conversion-accent)", /* green-600 */
        },
        trust: {
          builder: "var(--color-trust-builder)", /* slate-700 */
        },
        text: {
          secondary: "var(--color-text-secondary)", /* gray-500 */
        },
        cta: {
          urgent: "var(--color-cta-urgent)", /* red-600 */
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'brand': '0 8px 32px rgba(52, 152, 219, 0.2)',
        'vitrine': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'featured': '0 8px 32px rgba(46, 204, 113, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "scale-in": "scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}