const TS = require("rollup-plugin-typescript2");

module.exports = {
  input: ["src/index.ts", "src/attoms/Button/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [TS()],
  external: ["react", "@ds.e/scss/lib/Button.css"],
};
