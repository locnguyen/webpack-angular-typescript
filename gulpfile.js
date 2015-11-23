const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: true});
const inject = require('gulp-inject');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('generate-typescript-references', () => {
    var target = gulp.src('./tools/typings/app.d.ts');
    var sources = gulp.src('./src/app/**/*.ts', {read: false});
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return `/// <reference path="../..${filepath}" />`;
        }
    })).pipe(gulp.dest('./tools/typings'));
});

gulp.task('webpack', ['generate-typescript-references'], (done) => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new $.util.PluginError('webpack', err);
        }

        $.util.log('[webpack]', stats.toString({colors: true}));
        done();
    });
});

