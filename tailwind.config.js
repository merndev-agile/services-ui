/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.html',
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.tsx',
    './pages/**/*.jsx',
    './components/**/*.html',
    './components/**/*.js',
    './components/**/*.ts',
    './components/**/*.tsx',
    './components/**/*.jsx',
    './app/**/*.html',
    './app/**/*.js',
    './app/**/*.ts',
    './app/**/*.tsx',
    './app/**/*.jsx',
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
        Inter: ["Inter","Roboto Mono","monospace"],
      },
      screens: {
        'xxsm': {'min': '300px', 'max': '380px'},
        // => @media (min-width: 300px and max-width: 380px) { ... }

        'xsm': {'min': '300px', 'max': '640px'},
        // => @media (min-width: 300px and max-width: 640px) { ... }

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1349px'},
        // => @media (min-width: 1024px and max-width: 1349px) { ... }
  
        'xl': {'min': '1350px', 'max': '1650px'},
        // => @media (min-width: 1350px and max-width: 1650px) { ... }
  
        '2xl': {'min': '1651px'},
        // => @media (min-width: 1651px) { ... }
      },
    },
  },
  plugins: [],
}
