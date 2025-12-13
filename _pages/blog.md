---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">
  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}

  {% if blog_name_size > 0 or blog_description_size > 0 %}
    <div class="header-bar">
      <h1>{{ site.blog_name }}</h1>
      <h2>{{ site.blog_description }}</h2>
    </div>
  {% endif %}

  {% if site.display_tags or site.display_categories %}
    <div class="tag-category-list">
      <ul class="p-0 m-0">
        {% for tag in site.display_tags %}
          <li>
            <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
          </li>
          {% unless forloop.last %}
            <p>&bull;</p>
          {% endunless %}
        {% endfor %}
        {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
          <p>&bull;</p>
        {% endif %}
        {% for category in site.display_categories %}
          <li>
            <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
          </li>
          {% unless forloop.last %}
            <p>&bull;</p>
          {% endunless %}
        {% endfor %}
      </ul>
    </div>
  {% endif %}

  {% assign featured_posts = site.posts | where: "featured", "true" %}
  {% if featured_posts.size > 0 %}
    <br>
    <div class="container featured-posts">
      {% assign is_even = featured_posts.size | modulo: 2 %}
      <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
        {% for post in featured_posts %}
          <div class="col mb-4">
            <a href="{{ post.url | relative_url }}">
              <div class="card hoverable">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="float-right">
                        <i class="fa-solid fa-thumbtack fa-xs"></i>
                      </div>
                      <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                      <p class="card-text">{{ post.description }}</p>
                      {% if post.external_source == blank %}
                        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                      {% else %}
                        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                      {% endif %}
                      {% assign year = post.date | date: "%Y" %}
                      <p class="post-meta">
                        {{ read_time }} min read &nbsp; &middot; &nbsp;
                        <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        {% endfor %}
      </div>
    </div>
    <hr>
  {% endif %}

  <div class="container-fluid mt-4">
    <!-- Horizontal Filter Section -->
    <div class="mb-4" id="blog-filter-section">
      <div class="card shadow-sm filter-card-horizontal">
        <div class="card-body">
          <div class="filter-section-horizontal">
            <!-- Search Input -->
            <div class="mb-3">
              <div class="search-container-horizontal">
                <div class="search-input-wrapper">
                  <i class="fas fa-search search-icon"></i>
                  <input type="text" id="blog-search-input" class="form-control" placeholder="Search posts... (Press Enter or comma to add tags)">
                </div>
                <div class="search-buttons">
                  <button class="search-btn" type="button" id="blog-clear-search" title="Clear search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div id="blog-search-tags" class="mt-2 d-flex flex-wrap"></div>
            </div>

            <!-- Categories and Tags Row -->
            <div class="row">
              <div class="col-md-6 mb-3">
                <h6 class="filter-heading-horizontal filter-collapse-toggle" style="cursor: pointer; user-select: none; margin-bottom: 0.5rem;">
                  <i class="fas fa-folder"></i>
                  <span>Categories</span>
                  <i class="fas fa-chevron-down filter-chevron" style="margin-left: auto; transition: transform 0.3s ease; font-size: 0.75rem; opacity: 0.7;"></i>
                </h6>
                <div class="filter-collapse-content" id="blog-category-filters-wrapper">
                  <div class="d-flex flex-wrap" id="blog-category-filters">
                    <button class="filter-btn blog-category-btn selected mb-2 mr-2" data-category="All">All</button>
                    {% assign all_categories = site.posts | map: 'categories' | flatten | uniq | sort %}
                    {% for category in all_categories %}
                      {% if category != "" %}
                        <button class="filter-btn blog-category-btn mb-2 mr-2" data-category="{{ category }}">{{ category }}</button>
                      {% endif %}
                    {% endfor %}
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <h6 class="filter-heading-horizontal filter-collapse-toggle" style="cursor: pointer; user-select: none; margin-bottom: 0.5rem;">
                  <i class="fas fa-tags"></i>
                  <span>Tags</span>
                  <i class="fas fa-chevron-down filter-chevron" style="margin-left: auto; transition: transform 0.3s ease; font-size: 0.75rem; opacity: 0.7;"></i>
                </h6>
                <div class="filter-collapse-content" id="blog-tag-filters-wrapper">
                  <div class="filter-scroll-horizontal">
                    <div class="d-flex flex-wrap" id="blog-tag-filters">
                      <button class="filter-btn blog-tag-btn selected mb-2 mr-2" data-tag="All">All</button>
                      <!-- Tags will be populated by JavaScript -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active Filters -->
            <div id="blog-active-filters-section" class="mb-2 d-none">
              <div class="d-flex align-items-center flex-wrap">
                <h6 class="filter-heading-horizontal mb-2 mr-3" style="margin-bottom: 0 !important;">
                  <i class="fas fa-filter"></i>
                  <span>Active:</span>
                </h6>
                <div id="blog-active-filters" class="d-flex flex-wrap"></div>
                <button id="blog-reset-filters" class="btn btn-sm btn-primary ml-2">
                  <i class="fas fa-sync-alt mr-1"></i> Reset All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Posts Content Area -->
    <div class="row">
      <div class="col-12">
        <!-- No Posts Found Message -->
        <div id="no-posts-message" class="text-center py-5 d-none">
          <i class="fas fa-search fa-3x text-muted mb-3"></i>
          <h3>No posts found</h3>
          <p class="text-muted">Try adjusting your search or filter criteria.</p>
          <button id="blog-reset-filters-alt" class="btn btn-primary mt-2">Reset All Filters</button>
        </div>

        <!-- Blog Posts List -->
        <ul class="post-list" id="blog-posts-list">
          {% if page.pagination.enabled %}
            {% assign postlist = paginator.posts %}
          {% else %}
            {% assign postlist = site.posts %}
          {% endif %}

          {% for post in postlist %}
            {% if post.external_source == blank %}
              {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            {% else %}
              {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
            {% endif %}
            {% assign year = post.date | date: "%Y" %}
            {% assign tags = post.tags | join: "" %}
            {% assign categories = post.categories | join: "" %}

            <li class="blog-post-item" 
                data-title="{{ post.title | downcase }}"
                data-description="{{ post.description | downcase }}"
                data-tags="{{ post.tags | join: ',' | downcase }}"
                data-categories="{{ post.categories | join: ',' | downcase }}"
                data-year="{{ year }}">
              {% if post.thumbnail %}
                <div class="row">
                  <div class="col-sm-9">
              {% endif %}
                <h3>
                  {% if post.redirect == blank %}
                    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  {% elsif post.redirect contains '://' %}
                    <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                    <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {% else %}
                    <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                  {% endif %}
                </h3>
                <p>{{ post.description }}</p>
                <p class="post-meta">
                  {{ read_time }} min read &nbsp; &middot; &nbsp;
                  {{ post.date | date: '%B %d, %Y' }}
                  {% if post.external_source %}
                    &nbsp; &middot; &nbsp; {{ post.external_source }}
                  {% endif %}
                </p>
                <p class="post-tags">
                  <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                    <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                  {% if tags != "" %}
                    &nbsp; &middot; &nbsp;
                    {% for tag in post.tags %}
                      <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
                        <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
                      {% unless forloop.last %}
                        &nbsp;
                      {% endunless %}
                    {% endfor %}
                  {% endif %}
                  {% if categories != "" %}
                    &nbsp; &middot; &nbsp;
                    {% for category in post.categories %}
                      <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
                        <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
                      {% unless forloop.last %}
                        &nbsp;
                      {% endunless %}
                    {% endfor %}
                  {% endif %}
                </p>
              {% if post.thumbnail %}
                  </div>
                  <div class="col-sm-3">
                    <img class="card-img" src="{{post.thumbnail | relative_url}}" style="object-fit: cover; height: 90%" alt="image">
                  </div>
                </div>
              {% endif %}
            </li>
          {% endfor %}
        </ul>

        <!-- Server-side Pagination (hidden when filtering) -->
        <div id="blog-pagination" class="{% if page.pagination.enabled %}d-block{% else %}d-none{% endif %}">
          {% if page.pagination.enabled %}
            {% include pagination.liquid %}
          {% endif %}
        </div>
        
        <!-- Client-side Pagination (shown when filtering) -->
        <div id="blog-client-pagination" class="d-none">
          <nav aria-label="Filtered blog page navigation">
            <ul class="pagination pagination-lg justify-content-center" id="blog-client-pagination-list">
              <!-- Pagination will be generated by JavaScript -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Add Font Awesome if not already included -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!-- Add jQuery if not already included -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Add Bootstrap JS if not already included -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>

<style>
  /* Force hide pagination when it has d-none class */
  #blog-pagination.d-none {
    display: none !important;
    visibility: hidden !important;
  }
  
  #blog-client-pagination.d-none {
    display: none !important;
    visibility: hidden !important;
  }
  
  /* Enhanced Filter Styles - Horizontal Layout */
  #blog-filter-section {
    transition: all 0.3s ease;
    z-index: 99;
  }
  
  .filter-card-horizontal {
    border: none;
    box-shadow: none !important;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }
  
  .filter-card-horizontal:hover {
    box-shadow: none !important;
  }
  
  .filter-card {
    position: sticky;
    top: 80px;
    border: none;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08) !important;
    max-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }
  
  .filter-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  }
  
  html[data-theme='light'] .filter-card-horizontal {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  html[data-theme='dark'] .filter-card-horizontal {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  html[data-theme='light'] .filter-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid rgba(2, 132, 199, 0.1);
  }
  
  html[data-theme='dark'] .filter-card {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border: 1px solid rgba(56, 189, 248, 0.2);
  }
  
  .filter-card-horizontal .card-body {
    padding: 1.5rem;
  }
  
  .filter-card .card-body {
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    padding: 1.5rem;
    scrollbar-width: thin;
    scrollbar-color: #38bdf8 transparent;
  }
  
  .filter-card .card-body::-webkit-scrollbar {
    width: 6px;
  }
  
  .filter-card .card-body::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .filter-card .card-body::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    border-radius: 6px;
  }
  
  .filter-heading-horizontal {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.3px;
    text-transform: none;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  html[data-theme='light'] .filter-heading-horizontal {
    color: #475569;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.5rem;
  }
  
  html[data-theme='dark'] .filter-heading-horizontal {
    color: #cbd5e1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  .filter-heading-horizontal i {
    font-size: 0.85rem;
    opacity: 0.8;
  }
  
  html[data-theme='light'] .filter-heading {
    color: #0284c7;
    border-bottom: 3px solid #0284c7;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  html[data-theme='dark'] .filter-heading {
    color: #38bdf8;
    border-bottom: 3px solid #38bdf8;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .filter-heading i {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  html[data-theme='light'] .filter-group {
    border-bottom: 1px solid rgba(2, 132, 199, 0.15);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  html[data-theme='dark'] .filter-group {
    border-bottom: 1px solid rgba(56, 189, 248, 0.2);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .filter-group:last-child {
    border-bottom: none;
    padding-bottom: 1.5rem;
    margin-bottom: 0;
  }
  
  .filter-section {
    padding-bottom: 0.5rem;
  }
  
  .filter-btn {
    border-radius: 4px;
    padding: 0.4rem 0.85rem;
    font-size: 0.875rem;
    border: 1px solid;
    background-color: transparent;
    transition: all 0.2s ease;
    font-weight: 500;
    letter-spacing: 0.2px;
    cursor: pointer;
  }
  
  html[data-theme='light'] .filter-btn {
    color: #475569;
    border-color: rgba(0, 0, 0, 0.15);
    background: transparent;
  }
  
  html[data-theme='dark'] .filter-btn {
    color: #cbd5e1;
    border-color: rgba(255, 255, 255, 0.15);
    background: transparent;
  }
  
  html[data-theme='light'] .filter-btn.selected {
    background: rgba(2, 132, 199, 0.1);
    color: #0284c7;
    border-color: rgba(2, 132, 199, 0.3);
    box-shadow: none;
    transform: none;
  }
  
  html[data-theme='dark'] .filter-btn.selected {
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: none;
    transform: none;
  }
  
  html[data-theme='light'] .filter-btn:hover:not(.selected) {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.2);
    transform: none;
    box-shadow: none;
  }
  
  html[data-theme='dark'] .filter-btn:hover:not(.selected) {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: none;
    box-shadow: none;
  }
  
  .filter-scroll-horizontal {
    max-height: 120px;
    overflow-y: auto;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: #38bdf8 transparent;
  }
  
  .filter-scroll-horizontal::-webkit-scrollbar {
    width: 6px;
  }
  
  .filter-scroll-horizontal::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .filter-scroll-horizontal::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    border-radius: 6px;
  }
  
  .filter-scroll {
    max-height: 200px;
    overflow-y: auto;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: #38bdf8 transparent;
  }
  
  .filter-scroll::-webkit-scrollbar {
    width: 6px;
  }
  
  .filter-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .filter-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    border-radius: 6px;
  }
  
  .search-container-horizontal {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 500px;
  }
  
  .search-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .search-input-wrapper {
    position: relative;
    flex: 1;
  }
  
  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    transition: color 0.2s ease;
  }
  
  html[data-theme='dark'] .search-icon {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .search-input-wrapper .form-control {
    padding-left: 42px;
    padding-right: 12px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 6px;
    border: 1px solid;
    transition: all 0.2s ease;
    font-size: 0.9rem;
  }
  
  html[data-theme='light'] .search-input-wrapper .form-control {
    border-color: rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.02);
    color: #0f172a;
  }
  
  html[data-theme='light'] .search-input-wrapper .form-control:focus {
    border-color: rgba(0, 0, 0, 0.25);
    background: white;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
  
  html[data-theme='dark'] .search-input-wrapper .form-control {
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.03);
    color: #f8fafc;
  }
  
  html[data-theme='dark'] .search-input-wrapper .form-control:focus {
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
    outline: none;
  }
  
  .search-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .search-btn {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: var(--global-text-color);
    padding: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    box-shadow: none;
  }
  
  html[data-theme='dark'] .search-btn {
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .search-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: none;
    box-shadow: none;
  }
  
  html[data-theme='dark'] .search-btn:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .search-btn:active {
    transform: none;
  }
  
  /* Active filter tags styling */
  .active-filter {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.7rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  html[data-theme='light'] .active-filter {
    background: rgba(0, 0, 0, 0.05);
    color: #475569;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  html[data-theme='dark'] .active-filter {
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .active-filter .remove-filter {
    margin-left: 0.75rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.7;
    transition: all 0.2s ease;
    padding: 0 0.25rem;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .active-filter .remove-filter:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  html[data-theme='dark'] .active-filter .remove-filter:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  
  #blog-reset-filters {
    border-radius: 4px;
    font-weight: 500;
    padding: 0.4rem 0.85rem;
    transition: all 0.2s ease;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  
  html[data-theme='dark'] #blog-reset-filters {
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: none;
  }
  
  #blog-reset-filters:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: none;
    box-shadow: none;
  }
  
  html[data-theme='dark'] #blog-reset-filters:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .blog-post-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .blog-post-item.hidden {
    display: none;
  }
  
  /* Search tag styling */
  .search-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.65rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  html[data-theme='light'] .search-tag {
    background: rgba(0, 0, 0, 0.05);
    color: #475569;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  html[data-theme='dark'] .search-tag {
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .search-tag .remove-tag {
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.7;
    transition: all 0.2s ease;
    padding: 0 0.25rem;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-tag .remove-tag:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  html[data-theme='dark'] .search-tag .remove-tag:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  
  /* Collapsible filter sections */
  .filter-collapse-toggle {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .filter-collapse-toggle:hover {
    opacity: 1;
  }
  
  html[data-theme='light'] .filter-collapse-toggle:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  html[data-theme='dark'] .filter-collapse-toggle:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  
  .filter-collapse-toggle:active {
    transform: scale(0.98);
  }
  
  .filter-collapse-content {
    max-height: 1000px;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.3s ease, 
                margin 0.3s ease,
                padding 0.3s ease;
    opacity: 1;
    padding-top: 0.5rem;
  }
  
  .filter-collapse-content.collapsed {
    max-height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  .filter-chevron {
    transition: transform 0.3s ease;
  }
  
  .filter-collapse-toggle.active .filter-chevron {
    transform: rotate(180deg);
  }
  
  .filter-collapse-toggle:hover .filter-chevron {
    opacity: 1;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get all blog posts
  const blogPosts = document.querySelectorAll('.blog-post-item');
  const searchInput = document.getElementById('blog-search-input');
  const clearSearchBtn = document.getElementById('blog-clear-search');
  const categoryBtns = document.querySelectorAll('.blog-category-btn');
  const tagBtns = document.querySelectorAll('.blog-tag-btn');
  const resetFiltersBtn = document.getElementById('blog-reset-filters');
  const resetFiltersAltBtn = document.getElementById('blog-reset-filters-alt');
  const noPostsMessage = document.getElementById('no-posts-message');
  const postsList = document.getElementById('blog-posts-list');
  const pagination = document.getElementById('blog-pagination');
  const activeFiltersSection = document.getElementById('blog-active-filters-section');
  const activeFiltersContainer = document.getElementById('blog-active-filters');
  
  // Immediately hide server-side pagination if we'll be using client-side filtering
  // This prevents it from showing before JavaScript runs
  if (pagination) {
    // Check URL parameters for filters
    const urlParams = new URLSearchParams(window.location.search);
    const hasUrlFilters = urlParams.has('category') || urlParams.has('tag') || urlParams.has('search');
    
    // If there are URL filters, hide server pagination immediately
    if (hasUrlFilters) {
      pagination.classList.add('d-none');
      pagination.style.display = 'none';
    }
  }
  
  // Collect all unique tags from posts
  const allTags = new Set();
  blogPosts.forEach(post => {
    const tags = post.getAttribute('data-tags');
    if (tags) {
      tags.split(',').forEach(tag => {
        if (tag.trim()) allTags.add(tag.trim());
      });
    }
  });
  
  // Populate tag filters
  const tagFiltersContainer = document.getElementById('blog-tag-filters');
  const sortedTags = Array.from(allTags).sort();
  sortedTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn blog-tag-btn mb-2 mr-2';
    btn.setAttribute('data-tag', tag);
    btn.textContent = tag;
    tagFiltersContainer.appendChild(btn);
  });
  
  // Update tag buttons reference
  const allTagBtns = document.querySelectorAll('.blog-tag-btn');
  
  let activeCategories = [];
  let activeTags = [];
  let searchTags = []; // Array to store multiple search tags
  const searchTagsContainer = document.getElementById('blog-search-tags');
  
  // Client-side pagination variables
  let currentPage = 1;
  const postsPerPage = 5;
  let filteredPosts = [];
  
  // Flag to prevent URL updates during initial load from URL parameters
  let isLoadingFromUrl = false;
  
  // Function to add a search tag
  function addSearchTag(tag) {
    const trimmedTag = tag.trim().toLowerCase();
    if (trimmedTag && !searchTags.includes(trimmedTag)) {
      searchTags.push(trimmedTag);
      renderSearchTags();
      filterPosts();
      // Update URL
      setTimeout(updateUrlWithFilters, 100);
    }
  }
  
  // Function to remove a search tag
  function removeSearchTag(tag) {
    searchTags = searchTags.filter(t => t !== tag);
    renderSearchTags();
    filterPosts();
    // Update URL
    setTimeout(updateUrlWithFilters, 100);
  }
  
  // Function to render search tags
  function renderSearchTags() {
    searchTagsContainer.innerHTML = '';
    searchTags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'search-tag';
      tagElement.innerHTML = `${tag} <span class="remove-tag" data-tag="${tag}">×</span>`;
      searchTagsContainer.appendChild(tagElement);
    });
    
    // Add remove handlers
    document.querySelectorAll('.remove-tag').forEach(btn => {
      btn.addEventListener('click', function() {
        const tagToRemove = this.getAttribute('data-tag');
        removeSearchTag(tagToRemove);
      });
    });
  }
  
  // Search input functionality - handle Enter and comma
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = this.value.trim();
      if (value) {
        // Check if it contains commas
        if (value.includes(',')) {
          value.split(',').forEach(tag => {
            if (tag.trim()) addSearchTag(tag.trim());
          });
        } else {
          addSearchTag(value);
        }
        this.value = '';
      }
    }
  });
  
  // Handle comma input
  searchInput.addEventListener('input', function() {
    const value = this.value;
    if (value.includes(',')) {
      const parts = value.split(',');
      // Add all parts except the last one (which is still being typed)
      for (let i = 0; i < parts.length - 1; i++) {
        if (parts[i].trim()) {
          addSearchTag(parts[i].trim());
        }
      }
      // Keep the last part in the input
      this.value = parts[parts.length - 1];
    }
  });
  
  clearSearchBtn.addEventListener('click', function() {
    searchInput.value = '';
    searchTags = [];
    renderSearchTags();
    filterPosts();
  });
  
  // Category filter
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      if (category === 'All') {
        categoryBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        activeCategories = [];
      } else {
        document.querySelector('.blog-category-btn[data-category="All"]').classList.remove('selected');
        this.classList.toggle('selected');
        
        activeCategories = Array.from(document.querySelectorAll('.blog-category-btn.selected:not([data-category="All"])'))
          .map(b => b.getAttribute('data-category'));
      }
      
      filterPosts();
    });
  });
  
  // Tag filter
  allTagBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tag = this.getAttribute('data-tag');
      
      if (tag === 'All') {
        allTagBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        activeTags = [];
      } else {
        document.querySelector('.blog-tag-btn[data-tag="All"]').classList.remove('selected');
        this.classList.toggle('selected');
        
        activeTags = Array.from(document.querySelectorAll('.blog-tag-btn.selected:not([data-tag="All"])'))
          .map(b => b.getAttribute('data-tag').toLowerCase());
      }
      
      filterPosts();
    });
  });
  
  // Filter posts function
  function filterPosts() {
    // Collect all filtered posts
    filteredPosts = [];
    
    blogPosts.forEach(post => {
      const title = post.getAttribute('data-title') || '';
      const description = post.getAttribute('data-description') || '';
      const postTags = (post.getAttribute('data-tags') || '').split(',').map(t => t.trim().toLowerCase());
      const postCategories = (post.getAttribute('data-categories') || '').split(',').map(c => c.trim());
      
      // Search filter - check if any search tag matches
      const matchesSearch = searchTags.length === 0 || 
        searchTags.some(tag => 
          title.includes(tag) || 
          description.includes(tag)
        );
      
      // Category filter
      const matchesCategory = activeCategories.length === 0 ||
        activeCategories.some(cat => postCategories.includes(cat));
      
      // Tag filter
      const matchesTag = activeTags.length === 0 ||
        activeTags.some(tag => postTags.includes(tag));
      
      if (matchesSearch && matchesCategory && matchesTag) {
        filteredPosts.push(post);
      }
    });
    
    // Check if filtering is active
    const isFiltering = searchTags.length > 0 || activeCategories.length > 0 || activeTags.length > 0;
    
    // Show/hide no posts message
    if (filteredPosts.length === 0) {
      noPostsMessage.classList.remove('d-none');
      postsList.style.display = 'none';
      // Force hide both paginations
      if (pagination) {
      pagination.classList.add('d-none');
        pagination.style.display = 'none';
      }
      const clientPagination = document.getElementById('blog-client-pagination');
      if (clientPagination) {
        clientPagination.classList.add('d-none');
        clientPagination.style.display = 'none';
      }
    } else {
      noPostsMessage.classList.add('d-none');
      postsList.style.display = 'block';
      
      if (isFiltering) {
        // Force hide server-side pagination when filtering
        if (pagination) {
        pagination.classList.add('d-none');
          pagination.style.display = 'none';
        }
        currentPage = 1; // Reset to first page when filtering
        displayFilteredPosts();
        updateClientPagination();
      } else {
        // Show server-side pagination, hide client-side pagination
        if (pagination) {
        pagination.classList.remove('d-none');
          pagination.style.display = '';
        }
        const clientPagination = document.getElementById('blog-client-pagination');
        if (clientPagination) {
          clientPagination.classList.add('d-none');
          clientPagination.style.display = 'none';
        }
        // Show all posts (server-side pagination handles this)
        blogPosts.forEach(post => post.classList.remove('hidden'));
      }
    }
    
    // Update active filters display
    updateActiveFilters();
  }
  
  // Display filtered posts with pagination
  function displayFilteredPosts() {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    // Hide all posts first
    blogPosts.forEach(post => post.classList.add('hidden'));
    
    // Show only posts for current page
    postsToShow.forEach(post => post.classList.remove('hidden'));
  }
  
  // Update client-side pagination
  function updateClientPagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginationContainer = document.getElementById('blog-client-pagination');
    const paginationList = document.getElementById('blog-client-pagination-list');
    
    // Hide pagination if there's only one page or no posts
    if (totalPages <= 1 || filteredPosts.length === 0) {
      if (paginationContainer) {
      paginationContainer.classList.add('d-none');
        paginationContainer.style.display = 'none';
      }
      // Also force hide server-side pagination
      const serverPagination = document.getElementById('blog-pagination');
      if (serverPagination) {
        serverPagination.classList.add('d-none');
        serverPagination.style.display = 'none';
      }
      return;
    }
    
    paginationContainer.classList.remove('d-none');
    paginationList.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" tabindex="-1">Newer</a>`;
    if (currentPage > 1) {
      prevLi.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        currentPage--;
        displayFilteredPosts();
        updateClientPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    paginationList.appendChild(prevLi);
    
    // Page numbers
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    if (startPage > 1) {
      const firstLi = document.createElement('li');
      firstLi.className = 'page-item';
      firstLi.innerHTML = `<a class="page-link" href="#">1</a>`;
      firstLi.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        currentPage = 1;
        displayFilteredPosts();
        updateClientPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      paginationList.appendChild(firstLi);
      
      if (startPage > 2) {
        const ellipsisLi = document.createElement('li');
        ellipsisLi.className = 'page-item disabled';
        ellipsisLi.innerHTML = `<span class="page-link">...</span>`;
        paginationList.appendChild(ellipsisLi);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      const pageLi = document.createElement('li');
      pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
      pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      if (i !== currentPage) {
        pageLi.querySelector('a').addEventListener('click', function(e) {
          e.preventDefault();
          currentPage = i;
          displayFilteredPosts();
          updateClientPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
      paginationList.appendChild(pageLi);
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsisLi = document.createElement('li');
        ellipsisLi.className = 'page-item disabled';
        ellipsisLi.innerHTML = `<span class="page-link">...</span>`;
        paginationList.appendChild(ellipsisLi);
      }
      
      const lastLi = document.createElement('li');
      lastLi.className = 'page-item';
      lastLi.innerHTML = `<a class="page-link" href="#">${totalPages}</a>`;
      lastLi.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        currentPage = totalPages;
        displayFilteredPosts();
        updateClientPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      paginationList.appendChild(lastLi);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#">Older</a>`;
    if (currentPage < totalPages) {
      nextLi.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        currentPage++;
        displayFilteredPosts();
        updateClientPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    paginationList.appendChild(nextLi);
  }
  
  // Update active filters display
  function updateActiveFilters() {
    const hasActiveFilters = searchTags.length > 0 || activeCategories.length > 0 || activeTags.length > 0;
    
    if (hasActiveFilters) {
      activeFiltersSection.classList.remove('d-none');
      activeFiltersContainer.innerHTML = '';
      
      if (searchTags.length > 0) {
        searchTags.forEach(tag => {
          const filterEl = document.createElement('span');
          filterEl.className = 'active-filter';
          filterEl.innerHTML = `Search: "${tag}" <span class="remove-filter" data-type="search" data-value="${tag}">×</span>`;
          activeFiltersContainer.appendChild(filterEl);
        });
      }
      
      activeCategories.forEach(category => {
        const filterEl = document.createElement('span');
        filterEl.className = 'active-filter';
        filterEl.innerHTML = `Category: ${category} <span class="remove-filter" data-type="category" data-value="${category}">×</span>`;
        activeFiltersContainer.appendChild(filterEl);
      });
      
      activeTags.forEach(tag => {
        const filterEl = document.createElement('span');
        filterEl.className = 'active-filter';
        filterEl.innerHTML = `Tag: ${tag} <span class="remove-filter" data-type="tag" data-value="${tag}">×</span>`;
        activeFiltersContainer.appendChild(filterEl);
      });
      
      // Add remove filter handlers
      document.querySelectorAll('.remove-filter').forEach(btn => {
        btn.addEventListener('click', function() {
          const type = this.getAttribute('data-type');
          const value = this.getAttribute('data-value');
          
          if (type === 'search') {
            removeSearchTag(value);
          } else if (type === 'category') {
            const categoryBtn = document.querySelector(`.blog-category-btn[data-category="${value}"]`);
            if (categoryBtn) categoryBtn.classList.remove('selected');
            activeCategories = activeCategories.filter(c => c !== value);
            if (activeCategories.length === 0) {
              document.querySelector('.blog-category-btn[data-category="All"]').classList.add('selected');
            }
          } else if (type === 'tag') {
            const tagBtn = document.querySelector(`.blog-tag-btn[data-tag="${value}"]`);
            if (tagBtn) tagBtn.classList.remove('selected');
            activeTags = activeTags.filter(t => t !== value);
            if (activeTags.length === 0) {
              document.querySelector('.blog-tag-btn[data-tag="All"]').classList.add('selected');
            }
          }
          
          filterPosts();
        });
      });
    } else {
      activeFiltersSection.classList.add('d-none');
    }
  }
  
  // Reset filters
  function resetFilters() {
    searchInput.value = '';
    searchTags = [];
    renderSearchTags();
    activeCategories = [];
    activeTags = [];
    
    categoryBtns.forEach(btn => {
      btn.classList.remove('selected');
      if (btn.getAttribute('data-category') === 'All') {
        btn.classList.add('selected');
      }
    });
    
    allTagBtns.forEach(btn => {
      btn.classList.remove('selected');
      if (btn.getAttribute('data-tag') === 'All') {
        btn.classList.add('selected');
      }
    });
    
    filterPosts();
    
    // Update URL to remove all parameters
    setTimeout(function() {
      window.history.replaceState({}, '', window.location.pathname);
    }, 100);
  }
  
  resetFiltersBtn.addEventListener('click', resetFilters);
  resetFiltersAltBtn.addEventListener('click', resetFilters);
  
  // URL parameter functions
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  // Get filter parameters from URL
  const tagParam = getUrlParameter('tag');
  const tagsParam = getUrlParameter('tags'); // Search tags (plural)
  const categoryParam = getUrlParameter('category');
  const searchParam = getUrlParameter('search');
  
  // Set flag to prevent URL updates during initial load
  if (tagParam || tagsParam || categoryParam || searchParam) {
    isLoadingFromUrl = true;
  }
  
  // Apply filters from URL parameters if they exist
  if (tagParam) {
    // Support for multiple tags separated by commas
    const tags = tagParam.split(',').map(tag => tag.trim().toLowerCase());
    
    // Find and activate the tag filters
    allTagBtns.forEach(btn => {
      const btnTag = btn.getAttribute('data-tag').toLowerCase();
      if (tags.includes(btnTag)) {
        btn.click();
      }
    });
  }
  
  // Apply search tags from URL (tags=tag1,tag2)
  if (tagsParam) {
    // Support for multiple search tags separated by commas
    const tags = tagsParam.split(',').map(tag => tag.trim());
    searchTags = tags; // Set the search tags array
    renderSearchTags(); // Update the display
  }
  
  if (categoryParam) {
    // Support for multiple categories separated by commas
    const categories = categoryParam.split(',').map(cat => cat.trim().toLowerCase());
    
    // Find and activate the category filters
    categoryBtns.forEach(btn => {
      const btnCategory = btn.getAttribute('data-category').toLowerCase();
      if (categories.includes(btnCategory)) {
        btn.click();
      }
    });
  }
  
  if (searchParam) {
    // Set the search input
    if (searchInput) {
      searchInput.value = searchParam;
      // Trigger the input event to apply the search filter
      searchInput.dispatchEvent(new Event('input'));
    }
  }
  
  // Update URL when filters change
  function updateUrlWithFilters() {
    // Don't update URL if we're loading from URL parameters
    if (isLoadingFromUrl) {
      return;
    }
    
    // Get current filters
    const currentCategories = activeCategories.filter(cat => cat !== 'All');
    const currentTags = activeTags.filter(tag => tag !== 'All');
    const searchValue = searchInput ? searchInput.value : '';
    
    // Build URL parameters
    let params = new URLSearchParams();
    
    if (currentCategories.length > 0) {
      params.set('category', currentCategories.map(cat => cat.toLowerCase()).join(','));
    }
    
    if (currentTags.length > 0) {
      params.set('tag', currentTags.map(tag => tag.toLowerCase()).join(','));
    }
    
    // Add search tags (the ones added via Enter/comma)
    if (searchTags.length > 0) {
      params.set('tags', searchTags.join(','));
    }
    
    if (searchValue) {
      params.set('search', searchValue);
    }
    
    // Update URL without reloading the page
    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState({}, '', newUrl);
  }
  
  // Add event listeners to update URL when filters change
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Small delay to allow the filter to be applied first
      setTimeout(updateUrlWithFilters, 100);
    });
  });
  
  allTagBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Small delay to allow the filter to be applied first
      setTimeout(updateUrlWithFilters, 100);
    });
  });
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      // Debounce to avoid too many URL updates while typing
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(updateUrlWithFilters, 500);
    });
  }
  
  
  
  // Initial filter check on page load - hide server pagination if any filters are active
  // This handles cases where filters might be set via URL or other means
  setTimeout(function() {
    // Clear the loading flag so URL updates work normally now
    isLoadingFromUrl = false;
    
    const hasActiveFilters = searchTags.length > 0 || activeCategories.length > 0 || activeTags.length > 0;
    if (hasActiveFilters && pagination) {
      pagination.classList.add('d-none');
      pagination.style.display = 'none';
    }
    // Run initial filter to set up pagination correctly
    filterPosts();
  }, 100);
  
  // Collapsible filter sections functionality with localStorage
  const collapseToggles = document.querySelectorAll('.filter-collapse-toggle');
  
  // Function to get section ID from toggle element
  function getSectionId(toggle) {
    const heading = toggle.querySelector('span');
    if (heading) {
      const text = heading.textContent.trim();
      if (text === 'Categories') return 'blog-categories';
      if (text === 'Tags') return 'blog-tags';
    }
    return null;
  }
  
  // Function to save state to localStorage
  function saveCollapseState(sectionId, isExpanded) {
    try {
      if (sectionId) {
        const key = `blog-filter-section-${sectionId}`;
        const value = isExpanded ? 'expanded' : 'collapsed';
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn('Failed to save filter section state to localStorage:', e);
    }
  }
  
  // Function to load state from localStorage
  function loadCollapseState(sectionId, defaultValue) {
    try {
      if (sectionId) {
        const key = `blog-filter-section-${sectionId}`;
        const stored = localStorage.getItem(key);
        if (stored === 'expanded') return true;
        if (stored === 'collapsed') return false;
      }
    } catch (e) {
      console.warn('Failed to load filter section state from localStorage:', e);
    }
    return defaultValue;
  }
  
  // Initialize collapsible sections with saved state or defaults
  collapseToggles.forEach(toggle => {
    const sectionId = getSectionId(toggle);
    const content = toggle.nextElementSibling;
    
    if (!sectionId || !content) return;
    
    // Default states: Categories expanded, Tags expanded
    const defaultExpanded = true;
    const isExpanded = loadCollapseState(sectionId, defaultExpanded);
    
    if (isExpanded) {
      toggle.classList.add('active');
      content.classList.remove('collapsed');
    } else {
      toggle.classList.remove('active');
      content.classList.add('collapsed');
    }
  });
  
  // Add click handlers to save state
  collapseToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const sectionId = getSectionId(this);
      const content = this.nextElementSibling;
      
      if (!sectionId || !content) return;
      
      const isActive = this.classList.contains('active');
      const newState = !isActive;
      
      // Update UI immediately
      if (newState) {
        this.classList.add('active');
        content.classList.remove('collapsed');
      } else {
        this.classList.remove('active');
        content.classList.add('collapsed');
      }
      
      // Save state to localStorage
      saveCollapseState(sectionId, newState);
    });
  });
});
</script>
