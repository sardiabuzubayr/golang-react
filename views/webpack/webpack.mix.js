const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
//  mix.options({
//     hmrOptions: {
//         host:'localhost',
//         port: 8183
//     }
// })
mix.js('app.js', '/public/js/bundle.js').react()
mix.webpackConfig({ resolve: { 
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify")
    }  
} })