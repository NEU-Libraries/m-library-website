README.md
=========

## Content 

* to make something a draft, use the front matter `published: false`
* Order of posts are done by the date in reverse chronology. Post file names should be prefixed like this for the weight in the list on the site:  2013-01-01 would be before 2013-01-02.


## Editing and Adding Content

* If you need permission to edit the mobile site, contact Library Technology Services
* each section of the site is in the "posts" folder.  Edit existing posts or add a post in that folder and save.  
* headers and footers are in the "includes" folder
* use Markdown for layout.  [Documentation here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


## Developing

See the [Jekyll project documentation](jekyllrb.com)

### Gitflow settings

`/.git/config`

Include these for gitflow management.

    [gitflow "branch"]
      master = gh-pages
      develop = develop
    [gitflow "prefix"]
      feature = feature/
      release = release/
      hotfix = hotfix/
      support = support/
      versiontag = 


Porting [this](http://www.lib.neu.edu/m/index.html) to a jekyll site, as a start.  Prettying things up as we go hopefully.  
