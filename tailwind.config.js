const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },'.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    }
  })
})

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});
const perspective = plugin(function({addUtilities}) {
  addUtilities({
    '.perspective-1000': {
      'perspective': '1000px',
    }
  })
});
const transformStyle = plugin(function({addUtilities}) {
  addUtilities({
    '.preserve-3d': {
      'transform-style': 'preserve-3d',
    }
  })
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateY,backfaceVisibility,perspective,transformStyle],
}
