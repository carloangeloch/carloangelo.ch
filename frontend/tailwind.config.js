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
            'a2':'#222831',
            'b2':'#31363f',
            'c2':'#76abae',
            'd2':'#eeeeee',
        },
        colors: {
            'color-a':'#223843',
            'color-b':'#F8E7E2',
            'color-c':'#FDE047',
            'color-d':'#f6f8f5',
            'color-a2':'#222831',
            'color-b2':'#31363f',
            'color-c2':'#76abae',
            'color-d2':'#eeeeee',
        },
        backgroundImage: {
            'coding' :  "url('/src/assets/coding.jpg')",
            'designing' :  "url('/src/assets/designing.jpg')",
            'data-analyze' :  "url('/src/assets/data-analyze.jpg')",
            'my-image' :  "url('/src/assets/papaB.png')",
        },
        fontFamily:{
            title: ["Open Sans", "sans-serif"],
        },
        keyframes:{
          typing: {
            '0%': {opacity: 0},
            '49%': {opacity: 0},
            '50%': {opacity: 1},
            '100%': {opacity: 1},
          }
        },
        animation: {
          'typing': 'typing 1s linear infinite',
        }
    },
  },
  plugins: [],
}

