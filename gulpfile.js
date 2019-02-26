var gulp = require('gulp');
var server = require('gulp-webserver');
//启服务
gulp.task('startserver', function() {
    return gulp.src('src')
        .pipe(server({
            port: 7878,
            proxies: [{
                source: "/getdata",
                target: "http://localhost:3000/getdata"
            }, {
                source: "/adddata",
                target: "http://localhost:3000/adddata"
            }]
        }))
})