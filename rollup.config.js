import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    plugins: [
        resolve(),
        commonjs()
    ],
    input: 'src/index.js',
    output: {
      file: 'dist/github-calendar-web-component.min.js',
      format: 'iife'
    }
};
  