const autoprefixer = require('autoprefixer');

const path = require('path');

function tryResolve_(url, sourceFilename) {
 // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
 // when the importer throws
    try {
        return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
    } catch (e) {
    return '';
    }
}

function tryResolveScss(url, sourceFilename) {
 // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.sass') ? url : `${url}.sass`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(path.join(path.dirname(normalizedUrl),
    `_${path.basename(normalizedUrl)}`),
    sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return {file: resolved || url};
    }
    return {file: url};
}

module.exports = {
    entry: ['./app/sass/app.scss', './app/js/app.js'],
    output: {
        filename: 'bundle.js',
    },

    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: './css/bundle.css',

                        },

                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],

                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },
                ],
            }
        ],
    },
};