const { src, dest, series, watch } = require (`gulp`),
    jsLint = require (`gulp-eslint`),
    cssLint = require (`gulp-stylelint`),
    babel = require(`gulp-babel`),
    htmlCompressor = require(`gulp-htmlmin`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let browserChoice = `default`;

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLint())
        .pipe(jsLint.formatEach(`compact`));
};

let lintCSS = ()=>{
    return src(`/*.css`)
        .pipe(cssLint({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let transpileJSForProd = () => {
    return src(`/*.js`)
        .pipe(babel())
        .pipe(dest(`./prod`));
};


let compressHTML = () =>{
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`./prod`));
};

let compileCSSForProd = () => {
    return src(`styles/*.css`)
        .pipe(cssLint({
            outputStyle: `compressed`,
            precision: 10
        })
            .pipe(dest(`prod/styles`)));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            localhost: [
                `*/.js`,
                `*./html`,
                `index.html`
            ]
        }
    });

    watch(`scripts/*.js`, series(lintJS))
        .on(`change`,reload); };

watch(`styles/*.css`, (lintCSS))
    .on(`change`, reload);

exports.default = series(
    lintJS,
    lintCSS,
    serve,
);
exports.build = series(
    compressHTML,
    transpileJSForProd,
    compileCSSForProd
);
