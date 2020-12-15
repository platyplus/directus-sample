import commonjs from 'rollup-plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import vue from 'rollup-plugin-vue'
import replace from '@rollup/plugin-replace'

export default {
  input: ['src/**/index.ts'],
  output: {
    format: 'es',
    dir: 'extensions',
  },
  plugins: [
    multiInput(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      mainFields: ['browser', 'module', 'main'],
    }),
    typescript(),
    commonjs(),
    vue(),
    terser(),
  ],
}
