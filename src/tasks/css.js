import gulp import 'gulp';
import gulpif import 'gulp-if';
import livereload import 'gulp-livereload';
import args from './util/args';

gulp.task('css', ()=>{
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch, livereload))
})
