import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/index.js',
  plugins: [
    eslint(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  sourceMap: true,
  moduleName: 'ES6lib',
  targets: [
    { dest: 'dist/lib.js', format: 'cjs' },
    { dest: 'dist/lib.es.js', format: 'es' },
    { dest: 'demo/lib.umd.js', format: 'umd' }
  ]
};
