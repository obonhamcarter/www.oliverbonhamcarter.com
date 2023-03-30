---
title: "Build a Hugo Site with a Theme"
date: 2023-01-20T18:28:30-05:00
draft: false
---


**Making a website with Hugo**: You might want to use this bare-bones website template for an online research website.

Below is code to create a website and then to add posts (blogs) to the project. Each of these posts that you create could be akin to pages in a book that you could organize chronologically. Have fun!
<!-- add a line drop -->
<center>
&#x200B;

&#x200B;
</center>

<center>
<img src="/images/main/posts.png" alt="Huge Research Notebook" style="width:500px;"/>
</center>

<!-- add a line drop -->
<center>
&#x200B;

&#x200B;
</center>

## Setting Up

You will need to first install [HUGO](https://gohugo.io/installation/) to build and test your website locally. Once you are satisfied with how your site looks, you will push the entire project (i.e., all files for the project) to [GitHub](https://github.com/). Once your site is on GitHub, you will use [Netlify](https://www.netlify.com/) to build and publish your website.  

## Creating a Web Site

* We assume here that your local machine has `HUGO` installed on it.
* Create the new site with the command.

``` bash
hugo new site myAnubisThemeSite
```

## GitHub to host your project

* Create a GitHub repository using your campus email to host your web site project. Get the site ready to add to github. If you want to skip this part for now, be sure to at least initialize your project using `git init`.

## Adding posts

* Add a directory "Post" and place in it a Markdown file `post1.md`.

``` bash
hugo new post/post1.md
```

### Modify your post

Use your favorite editor to modify file that you just created. 

``` bash
code content/post/post1.md 
```

You will see that the only contents of the file are, 

``` bash 
---
title: "Post1"
date: 2023-01-30T22:30:39-05:00
draft: true
---
```

Modify the file by adding some content. Then change the `draft: true` to `draft: false` once you are ready to publish your new post. 

## Viewing your local site.
To view your site, use the below code to see all posts for which `draft` is set to `true`.

``` bash
hugo server
```

If you want to see all posts, regardless of whether their `draft` parameter is set to `true` or to `false`, use the below code instead.

``` bash
hugo server -D
```


## Install a Theme

You may not be able to see much until you have installed your theme to control the user-interface. You could use seemingly any theme that you want to use -- there are [quite a lot available](https://themes.gohugo.io/). In this tutorial, we will use a simple one called [Anubis](https://github.com/mitrichius/hugo-theme-anubis) that will provide a basic page by page view of notes. Feel free to try other themes to find the one that perfectly fits your site.

Add a submodule of the theme to `themes/` directory. Note adding repository as a submodule allows us to embed a GitHub project within another GitHub project. Git does not like multiple `.git` directories in a project.

```bash
git submodule add https://github.com/mitrichius/hugo-theme-anubis.git themes/anubis
```

### Note 
To see site in a fully prepared state, copy the files from `themes/anubis/exampleSite/config.toml` into your root directory and simply edit the `config.toml` file, in addition to the posts. If you want to see how to configure a web site from scratch, keep reading.

### Connect site to a theme: Add the following to `config.toml`

``` bash
baseURL = "http://example.org/"
languageCode = "en-us"
title = "My Amazing Site!"
theme = "anubis"
```

### Add a Menu System: Add the following to `config.toml`

Note, you can add as many menu items as necessary. Be sure to increment the `weight` variable by one for each menu item. The `weight` variable helps to control the order of the item in the menu. 

``` bash
[menu]

[[menu.main]]
identifier = "about"
name = "posts"
url = "/posts/"
weight = 1

[[menu.main]]
identifier = "tags"
name = "Tags"
url = "/tags/"
weight = 2

[[menu.main]]
name = "Archive"
identifier = "archive"
url = "/posts/"
weight = 3

```

### Adding a photo to a post

* Store all photos in the `static/` directory in the root. Note: it might be better to organize photos by different directories.
* Add a header and then place code to access the png file.

``` bash
## A photo of the Allegheny College Mascot

![Photo](/graphics/mascot.png)
```

Note, the File `mascot.png` is actually located in `myAnubisThemeSite/static/graphics`.

## Netlify

When you push your project to GitHub, the File `Netlify.toml` will signal GitHub to signal netlify to launch your site. Please read up on how to create an account at Netlify and make configurations to launch your site.