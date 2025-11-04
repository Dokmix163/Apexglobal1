module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'iOS >= 12',
        'Safari >= 12',
        'Chrome >= 60',
        'Firefox >= 60',
        'Edge >= 79'
      ]
    }
  }
};

