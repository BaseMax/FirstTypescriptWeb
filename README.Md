# First Typescript Web

A starter package to develop client website in **Typescript**, this config will generate a **single JS** file and use it at HTML files. also has **ESLiner** config and **web-pack** config to compress and handle files.

**Demo:** https://basemax.github.io/FirstTypescriptWeb/

## Using

At first remove `script.js` file at the root. If you are a linux, unix user, you can use `yarn b_try` to remove `script.js` file and try to build...

At next:

```
yarn install
yarn b
yarn serve
```

### Input Source

All of your sources are available at the `src/` directory and the main entry point is `src/index.js`.
You can easily use `import` the other files and export default in the source.

### Output

The output file is just a single JS file and it's available at `script.js` at the root outside of `src` directory.

## TODO

Currently, webpack will not work if the script.js file exists at the root. and we have to delete that file manually every time. It's best if we automate it to ignore the `script.js` file in webpack stage or limit the webpack processing only on the `src` directory and not out of that.

Any kind of help is welcome. send your Pull request. Thanks.

© Copyright Max Base, 2021
