import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'scripts/index.js',
  dest: 'public/bundle.js',
  moduleName: 'steppes',
  format: 'iife',
  plugins: [buble(), commonjs()]
}
