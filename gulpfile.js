// https://www.npmjs.com/package/gulp
const gulp     = require('gulp');               // створюємо константу gulp
const less     = require('gulp-less');          // створюємо константу less
const rename   = require('gulp-rename');        // створюємо константу rename
const cleanCSS = require('gulp-clean-css');     // створюємо константу cleanCSS
const del      = require('del');                // створюємо константу del
const babel    = require('gulp-babel');
const concat   = require('gulp-concat');
const uglify   = require('gulp-uglify');

// Шляхи до файлів до компіляції та після компіляції
const paths = {
    styles: {
        src: 'src/less/**/*.less', // до компіляції
        dest: 'dist/css/'          // після компіляції
    },
    scripts: {
        src: 'src/js/**/*.js',     // до компіляції
        dest: 'dist/js/'           // після компіляції
    }
};

// Функція очистки вихідної папки
function clean() {
    // яку папку очистити
    return del([ 'dist' ]);
}

// Функція обробки стилів (компіляції, очистка, мініфікації)
function styles() {
    return gulp.src(paths.styles.src)             // взяти файли за цим шляхом
        .pipe(less())                             // виконати (виконати компіляцію less)
        .pipe(cleanCSS())                         // виконати (очистити css)
        .pipe(rename({                       // виконати (перейменувати на main і добавити суфікс min)
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));      // виконати (записати файли в папку dist/css/)
}

// Функція обробки скриптів
function scripts() {
    return gulp.src(paths.scripts.src, {
        sourcemaps: true
    })
        .pipe(babel())
        .pipe(uglify())                            // виконати (мініфікація)
        .pipe(concat('main.min.js'))          // виконати (конкатенація файлів)
        .pipe(gulp.dest(paths.scripts.dest));      // виконати (записати файли в папку dist/js/)
}

// Функція відслідковувення змін
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

//const build = gulp.series(clean, gulp.parallel(styles, scripts), watch);
const build = gulp.series(clean, styles, scripts, watch);

exports.clean   = clean;
exports.styles  = styles;
exports.scripts = scripts;
exports.watch   = watch;
exports.build   = build;
exports.default = build;