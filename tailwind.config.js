/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#ffffff',
          dark: '#f3f4f6',
        },
        // Dark mode colors
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          text: '#ffffff',
        },
        primary: '#2563eb',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
