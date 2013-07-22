---
layout: default
title: Home
---

<div id="articles">
{% for post in site.posts reversed %}
  
  <article>
    <header>
      <h2 class="page-header">
        <a href="#{{forloop.index0}}" data-toggle="collapse" data-parent="#articles">{{ post.title}}</a>
      </h2>  
    </header>
    <section id="{{forloop.index0}}" class="collapse">
      {{ post.content }}
    </section>
  </article>
{% endfor %}
</div>

{{ content }}



