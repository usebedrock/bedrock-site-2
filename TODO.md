* Blog posts on the same day are ordered wrong

* The build command does not work, we need to replicate the same data that the server has for content docs and for blog posts

* I went on a path of coding here but couldn't fix it. We need to take doc.pug from the documentation and use that as a template for the markdown files to be rendered.
* We need to insert the markdown as "doc.body" in doc.pug

	* https://pugjs.org/api/reference.html
	* https://github.com/gulp-community/gulp-pug#readme
		* https://github.com/gulp-community/gulp-pug/blob/master/index.d.ts
		
Idea; try this https://github.com/DougBeney/gulp-frontmatter-wrangler

https://blog.stigok.com/2017/10/02/gulp-pug-with-template-filename-as-local-data-at-compile-time.html
https://pugjs.org/api/reference.html

* Generate files and folders for all the blog posts (static generation)
	* Look into how to do this with node https://karlboghossian.com/2020/05/10/organize-files-into-directories-by-creation-date-using-a-script/
--> I Should probably just regenerate the wordpress export with files and folders instead