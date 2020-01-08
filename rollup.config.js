import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import multiEntry from "rollup-plugin-multi-entry";
import replace from "rollup-plugin-replace";
import * as paths from "./src/main";

const production = !process.env.ROLLUP_WATCH;
const customElement = !process.env.CUSTOM_ELE;
console.log(paths.default);

export default {
  // input: "src/components/my-form/my-form.main.js",
  // input: [
  //   "src/components/my-form/my-form.main.js",
  //   "src/components/color-picker/color.main.js"
  // ],
  input: paths.default,
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: production ? "build/bundle.js" : "public/bundle.js"
  },
  plugins: [
    replace({
      CUSTOM_ELE: process.env.CUSTOM_ELE
    }),
    svelte({
      // opt in to v3 behaviour today
      // skipIntroByDefault: true,
      // nestedTransitions: true,
      customElement: true,
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write(production ? "build/bundle.css" : "public/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),
    multiEntry(), // handles multiple input paths
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ]
};
