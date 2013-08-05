---
layout: default
---
<a href="{{site.desktopsite}}" title="Visit Desktop Version of the site" class="btn btn-block btn-info">
  <span class="icon-desktop icon-large"></span> Visit Full Site
</a>
{{ content }}
<div id="articles" class="article-list">



{% for post in site.posts reversed %}
  
  <article>
    <header>
      <h2 class="page-header">
        <a data-toggle="nuCollapse" data-target="#{{forloop.index0}}">{{ post.title}}</a>
      </h2>  
    </header>
    <section id="{{forloop.index0}}" class="collapse">
      {{ post.content }}
    </section>
  </article>
{% endfor %}
</div>

