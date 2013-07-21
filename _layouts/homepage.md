---
layout: default
title: Home
---

<div id="articles">
{% for post in site.posts %}

  {% if post.id != null  %}
    {% assign post.id  =  post.title | downcase | replace: " " ,"-" %} 
  {% endif %}
  <article>
    <header>
      <h2 class="page-header">
        <a href="#{{post.id}}" data-toggle="collapse" data-parent="#articles">{{ post.title}}</a>
      </h2>  
    </header>
    <section id="{{post.id}}" class="collapse">
      {{ post.content }}
    </section>
  </article>
{% endfor %}
</div>

{{ content }}



