module.exports = {
  purge: {
    content: [
      './src/*.js'
    ],
  },
  theme: {
    maxHeight: {
      '80': '80vh'
    },
    extend: {
      colors: {
        'primaryBlue': '#2d4059',
        'secondaryBlue': '#2d3748',
        'accentYellow': '#ffc107',
      },
      borderWidth: {
        3: '3px',
      },
      backgroundOpacity: {
        '90': '0.9'
      }
    }
  },
  variants: {},
  plugins: [],
}
