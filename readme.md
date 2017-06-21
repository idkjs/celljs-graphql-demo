# Build Pipeline for hyperx

- note: uglify-js
- note: just learn about `$(npm bin)`. See: https://docs.npmjs.com/cli/bin
- i had to install uglify-js -g, not locally, for the build command in the example to run.

- buid command for browserify is:

```js
$(npm bin)/browserify \
  -t babelify \
  -g uglifyify \
  -p bundle-collapser/plugin index.js | uglifyjs > bundle.js

```
