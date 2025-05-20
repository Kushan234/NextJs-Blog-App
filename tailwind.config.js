/** @type {import('tailwindcss').Config} */
const nextConfig = {
  images: {
    domains: ['www.biorbit.com'],
  },
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryButton: "#0e6641",
      },
    },
  },
  plugins: [],
};

module.exports = nextConfig;
