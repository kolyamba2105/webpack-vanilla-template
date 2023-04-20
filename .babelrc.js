module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3.30.1" }],
    ["@babel/preset-typescript"],
  ],
};
