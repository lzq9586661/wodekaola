let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let rename = require("gulp-rename");
let imagemin = require("gulp-imagemin");
// let sass = require("gulp-sass");


// gulp.task("default",async ()=>{
//     gulp.src("./src/**/*")
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src"));
// });


    gulp.watch("./src/*.html",async()=>{
        gulp.src("./src/*.html")
        // .pipe(htmlmin({
        //     collapseWhitespace:true,
        //     removeEmptyAttributes: true,
        //     minifyJS: true,
        //     minifyCSS:true
        // }))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src"));
    })
	//page
	gulp.watch("./src/page/*.html",async()=>{
	    gulp.src("./src/page/*.html")
	    // .pipe(htmlmin({
	    //     collapseWhitespace:true,
	    //     removeEmptyAttributes: true,
	    //     minifyJS: true,
	    //     minifyCSS:true
	    // }))
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src\\page"));
	})
	// img
	gulp.task("default",async()=>{
	    gulp.watch("./src/img/*",async()=>{
	        gulp.src("./src/img/*")
	        .pipe(imagemin())
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src\\img"))
	    })
	// css
    gulp.watch("./src/css/*.css",async ()=>{
        gulp.src("./src/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src\\css"));
    })
	// js
	gulp.watch("./src/js/*.js", async ()=>{
	        gulp.src("./src/js/*.js")
	         .pipe(uglify())
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src\\js"))
	})
	// sever
	gulp.watch("./src/server/*.php", async ()=>{
		gulp.src("./src/server/*.php")
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\two\\kaola\\src\\server"))
	})
	//sass
	 gulp.watch("./src/*.scss",async ()=>{
	       gulp.src("./src/*.scss")
	       .pipe(sass())
	       .pipe(gulp.dest("./dist"));
	    });
})
	