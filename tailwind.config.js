module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Ubuntu',
      secondary: 'Open Sans',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#047b53',
          200: '#F2F2F2',
          300: '#033667',
          400:'#3c94db '
        },
        neutral: {
          100: '#ffffff',
          200: '#0E1B15',
          300: '#54A17D',
          400:'#7C7A7D' ,//gris
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        heroBg: "url(./src/imgs/hero/banner.jpg)",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
    },
  },
  plugins: [],
};
