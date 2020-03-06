module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "10"
        },
        useBuiltIns: "usage",
        corejs: {
          version: 2
        }
      }
    ]
  ]
};
