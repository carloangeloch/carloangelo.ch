/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundColor: {
            'a':'#223843',
            'b':'#F8E7E2',
            'c':'#FDE047',
            'd':'#f6f8f5',
        },
        colors: {
            'color-a':'#223843',
            'color-b':'#F8E7E2',
            'color-c':'#FDE047',
            'color-d':'#f6f8f5',
        },
        backgroundImage: {
            'coding' :  "url('/src/assets/coding.jpg')",
            'designing' :  "url('/src/assets/designing.jpg')",
            'data-analyze' :  "url('/src/assets/data-analyze.jpg')",
            'my-image' :  "url('/src/assets/papaB.png')",
        },
    },
  },
  plugins: [],
}

