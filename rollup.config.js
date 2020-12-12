import commonjs from 'rollup-plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import vue from 'rollup-plugin-vue'
import wildcardExternal from '@oat-sa/rollup-plugin-wildcard-external'

export default {
  input: 'src/**/index.ts',
  output: {
    format: 'es',
    dir: 'extensions',
  },
  plugins: [
    multiInput(),
    typescript(),
    resolve({ jail: 'src' }),
    commonjs(),
    vue(),
    terser(),
    wildcardExternal(['@/**']),
  ],
  external: ['@vue/composition-api'],
}
