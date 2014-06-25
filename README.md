Full Frontal Ingenuity website
==============

Jekyll-based instance.  To use, just install Jekyll  (if you haven't already):

    gem install jekyll

... then:

	cd ~/sandbox
	git clone git://github.com/prolixalias/prolixalias.github.io

... and then finally:

    jekyll --server

Then open your browser and hit [http://localhost:5000](http://localhost:5000).

That'll get you to the home page. The rest is all you!  See the [Jekyll docs](https://github.com/mojombo/jekyll/wiki) for details.

    rm -rf .git
    git init
    git add .
    git commit -am "my first commit"

### What This Actually Does	

All this kit does is set you up with the typical Jekyll directory structure, a sample index.html file, a sample post, a shared header and footer, and a couple of tweaks to the default configuration (port 5000, auto-regenerate true).  That's it -- no categories, no tags, no Twitter or Disqus integration, no fanciness.  Deliberately simple, just the basics.  I know I wanted this when I first got started with Jekyll, so here it is -- hopefully helpful to you, too.

To create a new post, just:

    touch _posts/yyyy-mm-dd-url-friendly-title.markdown

... where yyyy-mm-dd is a date (e.g., 2012-08-31) and url-friendly-title is, well, a URL-friendly title.  Then inside that post, be sure to add at least the minimal [YAML front matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) (see the _posts folder for an example):

    ---
    layout: post
    title: "A Post"
    ---

   	It was a dark and stormy night...

Enjoy.
