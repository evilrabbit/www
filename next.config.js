const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')(['gsap', 'gsap/CSSRulePlugin', 'gsap/ScrambleTextPlugin', 'gsap/SplitText']);

const others = {
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withPlugins([others, withTM, withSvgr]);
