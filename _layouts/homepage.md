---
layout: default
title: Home
---
{% for post in site.posts %}
  <h2 class="page-header" id="{{ post.title | downcase | replace: " " ,"-" }}">{{ post.title }}</h2>
  {{ post.content }}
{% endfor %}


{{ content }}



