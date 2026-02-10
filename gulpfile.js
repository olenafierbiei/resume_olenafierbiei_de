const gulp = require('gulp');
const { default: autoprefixer } = require('gulp-autoprefixer'); const cleanCSS = require('gulp-clean-css');

// Функція для обробки CSS
function buildStyles() {
  return gulp.src('style.css') // Беремо оригінал
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS()) // Стискаємо
    .pipe(gulp.dest('dist')); // Кладемо в папку dist
}

// "Експортуємо" функцію як таск під назвою 'styles'
exports.styles = buildStyles;