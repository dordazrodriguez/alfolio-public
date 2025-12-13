---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: ['Financial', 'Quant', 'Dev', 'DevOps', 'Cybersecurity', 'Web', 'Data Science', 'ML', 'AI']
horizontal: false
---

<!-- Hide the default page title -->
<style>
  .body {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
  }
  .container {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto !important;
  }
  .post {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
  }
  .post-title {
    display: none;
  }
  .post-description {
    display: none;
  }
</style>

<div class="container-fluid mt-4" style="max-width: 90%; margin-left: auto; margin-right: auto;">
  <div class="row">
    <!-- Page Header -->
    <div class="col-12 mb-4 d-flex justify-content-between align-items-center">
      <div>
        <h1 class="page-title">My Projects</h1>
        <p class="text-muted" id="project-count" style="font-weight: bold;"></p>
      </div>
      <!-- Filter Toggle Button -->
      <button id="filter-toggle" class="btn btn-sm btn-outline-primary">
        <i class="fas fa-filter mr-1"></i> <span id="toggle-text">Hide Filters</span>
      </button>
    </div>

    <!-- Filter Section (Vertical Layout) -->
    <div class="col-12 mb-4" id="filter-section-horizontal">
      <div class="card filter-card-horizontal">
        <div class="card-body">
          <div class="filter-section-horizontal">
            <!-- Search Section -->
            <div class="mb-4">
              <div class="search-container-horizontal">
                <div class="search-input-wrapper">
                  <i class="fas fa-search search-icon"></i>
                  <input type="text" id="search-input" class="form-control" placeholder="Search projects... (Press Enter or comma to add tags)">
                </div>
                <div class="search-buttons">
                  <button class="search-btn" type="button" id="clear-search" title="Clear search">
                    <i class="fas fa-times"></i>
                  </button>
                  <button class="search-btn" type="button" id="add-search-tag" title="Add as tag">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div id="search-tags" class="mt-2 d-flex flex-wrap"></div>
            </div>
            
            <!-- Active Filters Section -->
            <div id="active-filters-section" class="d-none mb-3">
              <div id="active-filters" class="d-flex flex-wrap align-items-center mb-2" style="gap: 0.5rem;"></div>
              <button id="reset-filters" class="btn btn-sm reset-filters-btn">
                <i class="fas fa-sync-alt mr-1"></i> Reset All
              </button>
            </div>

            <!-- Categories Section -->
            <div class="mb-4">
              <h6 class="filter-heading-horizontal filter-collapse-toggle" style="cursor: pointer; user-select: none; margin-bottom: 0.5rem;">
                <i class="fas fa-folder"></i>
                <span>Categories</span>
                <i class="fas fa-chevron-down filter-chevron" style="margin-left: auto; transition: transform 0.3s ease; font-size: 0.75rem; opacity: 0.7;"></i>
              </h6>
              <div class="filter-collapse-content" id="category-filters-wrapper">
                <div class="d-flex flex-wrap" id="category-filters" style="gap: 0.5rem;">
                  <button class="filter-btn category-btn selected mb-1 mr-0" data-category="All">All</button>
                  {% for category in page.display_categories %}
                    <button class="filter-btn category-btn mb-1 mr-0" data-category="{{ category }}">{{ category }}</button>
                  {% endfor %}
                </div>
              </div>
            </div>

            <!-- Technologies Section -->
            <div class="mb-3">
              <h6 class="filter-heading-horizontal filter-collapse-toggle" style="cursor: pointer; user-select: none; margin-bottom: 0.5rem;">
                <i class="fas fa-tags"></i>
                <span>Technologies</span>
                <i class="fas fa-chevron-down filter-chevron" style="margin-left: auto; transition: transform 0.3s ease; font-size: 0.75rem; opacity: 0.7;"></i>
              </h6>
              <div class="filter-collapse-content" id="tech-filters-wrapper">
                <div class="filter-scroll-horizontal">
                  <div class="d-flex flex-wrap" id="tech-filters" style="gap: 0.5rem;">
                    <button class="filter-btn tech-btn selected mb-1 mr-0" data-tech="All">All</button>
                    <!-- Tags will be populated by JavaScript -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Content Area -->
    <div class="col-12" style="">
      <!-- No Projects Found Message -->
      <div id="no-projects-message" class="text-center py-5 d-none">
        <i class="fas fa-search fa-3x text-muted mb-3"></i>
        <h3>No projects found</h3>
        <p class="text-muted">Try adjusting your search or filter criteria.</p>
        <button id="reset-filters-alt" class="btn btn-primary mt-2">Reset All Filters</button>
      </div>

      <!-- Projects Grid -->
      <div class="projects">
        {% assign sorted_projects = site.projects | sort: "importance" %}
        {% comment %} Projects will be sorted by date in JavaScript (most recent first), then by importance {% endcomment %}
        <div class="row" id="projects-grid">
          {% for project in sorted_projects %}
            <div class="col-md-6 col-lg-4 mb-4 project-card" 
                 data-category="{% if project.category %}{% if project.category.first %}{{ project.category | join: ',' }}{% else %}{{ project.category }}{% endif %}{% endif %}" 
                 data-title="{{ project.title }}" 
                 data-description="{{ project.description }}"
                 data-tags="{{ project.tags | join: ',' }}"
                 data-image="{% if project.img %}{{ project.img | relative_url }}{% endif %}{% if project.additional_images %}{% for img in project.additional_images %},{{ img | relative_url }}{% endfor %}{% endif %}"
                 data-video="{% if project.video %}{{ project.video | relative_url }}{% endif %}"
                 data-link="{{ project.link }}"
                 data-github="{{ project.github }}"
                 data-live="{{ project.live }}"
                 data-date="{% if project.date %}{{ project.date | date: '%Y-%m-%d' }}{% else %}1900-01-01{% endif %}"
                 data-show-date="{% if project.show_date == true %}true{% else %}false{% endif %}"
                 data-importance="{% if project.importance %}{{ project.importance }}{% else %}9999{% endif %}"
                 data-has-importance="{% if project.importance %}true{% else %}false{% endif %}"
                 data-details="{{ project.url | relative_url }}">
              <div class="card" onclick="openProjectModal(this.parentNode)">
                {% if project.img %}
                  {%
                    include figure.liquid
                    loading="eager"
                    path=project.img
                    sizes = "250px"
                    alt="project thumbnail"
                    class="card-img-top"
                  %}
                {% endif %}
                {% if project.video %}
                  <video autoplay muted loop class="card-img-top">
                    <source src="{{ project.video }}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                {% endif %}
                <div class="card-body">
                  <h5 class="card-title">{{ project.title }}</h5>
                  {% if project.show_date and project.date and project.date != '1900-01-01' %}
                    <small class="text-muted d-block mb-2">
                      <i class="far fa-calendar mr-1"></i>{{ project.date | date: "%B %Y" }}
                    </small>
                  {% endif %}
                  <p class="card-text">{{ project.description }}</p>
                  <div class="d-flex flex-wrap badge-container" style="gap: 0.2rem; margin-bottom: 0.25rem;">
                    {% for tag in project.tags %}
                      <span class="badge badge-primary project-tag">{{ tag }}</span>
                    {% endfor %}
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  {% if project.link %}
                    <a href="{{ project.link }}" class="btn btn-sm btn-outline-primary" target="_blank">
                      <i class="fas fa-link mr-1"></i> Link
                    </a>
                  {% elsif project.github %}
                    <a href="{{ project.github }}" class="btn btn-sm btn-outline-primary" target="_blank">
                      <i class="fas fa-link mr-1"></i> Link
                    </a>
                  {% endif %}
                  <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}" class="btn btn-sm btn-primary">
                    Details
                  </a>
                </div>
              </div>
            </div>
          {% endfor %}
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
  /* Filter Styles - Vertical Sidebar Layout */
  #filter-sidebar {
    transition: all 0.3s ease;
    z-index: 99;
  }
  
  /* Horizontal Filter Styles */
  #filter-section-horizontal {
    display: block;
    transition: max-height 0.3s ease, opacity 0.3s ease, margin 0.3s ease;
  }
  
  #filter-section-horizontal.hidden {
    display: none;
  }
  
  /* Enhanced Filter Card Styling */
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
  
  html[data-theme='light'] .filter-card-horizontal {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  html[data-theme='dark'] .filter-card-horizontal {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  .filter-card-horizontal .card-body {
    padding: 1.5rem;
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
  
  .search-container-horizontal {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 767.98px) {
    .filter-scroll-horizontal {
      max-height: 100px;
    }
  }
  
  /* Projects Content Area Padding */
  .projects {
    padding-left: 0;
    padding-right: 0;
  }
  
  @media (max-width: 767.98px) {
    .col-12[style*="padding"] {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    .col-12[style*="padding"] {
      padding-left: 2rem !important;
      padding-right: 2rem !important;
    }
  }
  
  .filter-card .card-body::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .filter-card .card-body::-webkit-scrollbar-thumb {
    background-color: #38bdf8;
    border-radius: 6px;
  }
  
  /* Light/dark mode specific styling for filter card */
  html[data-theme='light'] .filter-card {
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  html[data-theme='dark'] .filter-card {
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  html[data-theme='light'] .filter-heading {
    color: #0284c7;
    border-bottom: 2px solid #0284c7;
  }
  
  html[data-theme='dark'] .filter-heading {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
  }
  
  .filter-chevron {
    font-size: 0.75rem;
    margin-left: auto;
    opacity: 0.7;
  }
  
  .filter-dropdown-toggle:hover .filter-chevron {
    opacity: 1;
  }
  
  html[data-theme='light'] .filter-dropdown-toggle:hover {
    background-color: rgba(2, 132, 199, 0.05);
  }
  
  html[data-theme='dark'] .filter-dropdown-toggle:hover {
    background-color: rgba(56, 189, 248, 0.1);
  }
  
  html[data-theme='light'] .filter-group {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  html[data-theme='dark'] .filter-group {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .filter-heading {
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    display: inline-block;
    width: 100%;
  }
  
  .filter-dropdown-toggle {
    user-select: none;
    position: relative;
  }
  
  .filter-dropdown-toggle.active .filter-chevron {
    transform: rotate(180deg);
  }
  
  .filter-dropdown-content {
    max-height: 500px;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
    opacity: 1;
    padding-top: 0.5rem;
  }
  
  .filter-dropdown-content.collapsed {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  
  .filter-group {
    padding-bottom: 1rem;
  }
  
  .filter-group:last-child {
    border-bottom: none;
    padding-bottom: 1.5rem;
  }
  
  .filter-section {
    padding-bottom: 0.5rem;
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
  
  /* Reset Filters Button */
  .reset-filters-btn {
    border-radius: 4px;
    font-weight: 500;
    padding: 0.4rem 0.85rem;
    transition: all 0.2s ease;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  
  html[data-theme='dark'] .reset-filters-btn {
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: none;
  }
  
  .reset-filters-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: none;
    box-shadow: none;
  }
  
  html[data-theme='dark'] .reset-filters-btn:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  
  .filter-scroll {
    max-height: 350px; /* Increased from 200px for more visible tags */
    overflow-y: auto;
    padding-right: 5px;
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
    background-color: #38bdf8;
    border-radius: 6px;
  }

  /* Card hover effect */
  .card:not(.filter-card-horizontal) {
    transition: none !important;
    transform: none !important;
  }
  
  .card:not(.filter-card-horizontal):hover {
    transform: none !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
    border-bottom: none !important;
  }
  
  /* Light/dark mode specific styling */
  html[data-theme='light'] .card:not(.filter-card-horizontal) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  html[data-theme='dark'] .card:not(.filter-card-horizontal) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  html[data-theme='light'] .card-text:not(.project-card .card-text) {
    color: #ffffff !important;
    font-weight: 500 !important;
  }
  
  html[data-theme='dark'] .card-text:not(.project-card .card-text) {
    color: #cbd5e1 !important;
    font-weight: 500 !important;
  }
  
  .project-card .card-text {
    color: inherit !important;
  }
  
  html[data-theme='light'] .project-card .card-text {
    color: #ffffff !important;
  }
  
  html[data-theme='dark'] .project-card .card-text {
    color: #cbd5e1 !important;
  }
  
  /* Responsive adjustments */
  @media (max-width: 767.98px) {
    .filter-card-horizontal .card-body {
      padding: 1rem;
    }
    
    .filter-heading-horizontal {
      font-size: 0.8rem;
    }
    
    .project-card .card-img-top {
      height: 250px;
    }
    
    .project-card .card-img-top img,
    .project-card .card-img-top video,
    .project-card .card-img-top picture,
    .project-card .card-img-top figure {
      height: 250px;
    }
    
    .project-card .card-img-top img {
      height: 250px !important;
      max-height: 250px !important;
      min-height: 250px !important;
    }
  }
  
  @media (min-width: 768px) {
    .project-card .card-img-top {
      height: 280px;
    }
  }
  
  /* Ensure filter sidebar doesn't overlap with footer */
  @media (min-height: 700px) {
    .filter-card {
      position: sticky;
      top: 80px;
      max-height: calc(100vh - 60px); /* Increased height for more space */
    }
  }
  
  /* Add padding to the bottom of the page to ensure there's room for scrolling */
  .projects-container {
    padding-bottom: 50px;
  }
  
  /* Ensure the navbar has higher z-index than the filter sidebar */
  .navbar {
    z-index: 1030; /* Bootstrap default for fixed navbar */
  }
  
  /* Page title styling */
  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;
  }
  
  .page-title:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #38bdf8;
    border-radius: 2px;
  }
  
  /* Project card hover effect */
  .project-card {
    cursor: pointer;
  }
  
  /* Direct override of al-folio card hover effect */
  .card-item {
    position: relative;
  }
  
  .card-item:before, 
  .card-item::before,
  .card-item:after, 
  .card-item::after,
  .card-item .card:before,
  .card-item .card::before,
  .card-item .card:after,
  .card-item .card::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    position: static !important;
    z-index: -9999 !important;
    width: 0 !important;
    height: 0 !important;
  }
  
  /* Completely disable the theme's hover effect */
  .projects .card-item:hover .card:after {
    height: 0 !important;
    width: 0 !important;
    opacity: 0 !important;
    display: none !important;
    visibility: hidden !important;
    background-color: transparent !important;
  }
  
  /* Additional theme-specific overrides */
  html[data-theme="light"] .projects .card-item:hover .card:after,
  html[data-theme="dark"] .projects .card-item:hover .card:after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  /* Remove default card hover effect - more specific selectors */
  .card.hoverable:after,
  .card.hoverable::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  .card.hoverable:hover:after,
  .card.hoverable:hover::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  /* Override the default al-folio hover styles completely */
  .card.hoverable {
    overflow: visible !important;
  }
  
  .card.hoverable:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    background-color: transparent !important;
  }
  
  /* Additional overrides for light theme */
  html[data-theme="light"] .card.hoverable:after,
  html[data-theme="light"] .card.hoverable::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  html[data-theme="light"] .card.hoverable:hover:after,
  html[data-theme="light"] .card.hoverable:hover::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  /* Super aggressive overrides to remove ALL hover effects */
  .card.hoverable:before,
  .card.hoverable::before,
  .card.hoverable:after, 
  .card.hoverable::after,
  .card.hoverable *:before,
  .card.hoverable *::before,
  .card.hoverable *:after,
  .card.hoverable *::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    position: static !important;
    z-index: -9999 !important;
    width: 0 !important;
    height: 0 !important;
  }
  
  /* Completely disable all hover styles and replace with our own */
  .card.hoverable {
    position: relative !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    border-radius: 12px !important;
    overflow: hidden !important;
  }
  
  .card.hoverable:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    background-color: transparent !important;
  }
  
  /* Additional specific overrides for the theme */
  html[data-theme="light"] .card.hoverable:hover {
    background-color: transparent !important;
  }
  
  html[data-theme="dark"] .card.hoverable:hover {
    background-color: transparent !important;
  }
  
  /* Ensure no background rectangle appears */
  .card.hoverable:hover:before,
  .card.hoverable:hover::before,
  .card.hoverable:hover:after,
  .card.hoverable:hover::after {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    content: none !important;
    background: transparent !important;
  }
  
  /* Make all project cards uniform in size - styled like modals */
  .card:not(.filter-card-horizontal) {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  /* Remove any corner artifacts */
  .project-card .card::before,
  .project-card .card::after {
    display: none !important;
  }
  
  .project-card .card-footer::before,
  .project-card .card-footer::after {
    display: none !important;
    content: none !important;
  }
  
  html[data-theme='light'] .project-card .card {
    background-color: #ffffff;
    color: #1e293b;
  }
  
  html[data-theme='dark'] .project-card .card {
    background-color: #1e293b;
    color: #f8fafc;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .card-body {
    padding: 1.5rem;
    height: auto;
    min-height: auto;
    max-height: none;
    overflow: visible;
    display: flex;
    flex-direction: column;
  }
  
  .project-card .card-body {
    padding: 2rem;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    display: flex !important;
    flex-direction: column !important;
  }
  
  html[data-theme='light'] .project-card .card-body {
    color: #475569;
  }
  
  html[data-theme='dark'] .project-card .card-body {
    color: #cbd5e1;
  }
  
  .card-img-top, 
  video.card-img-top {
    height: 250px;
    object-fit: cover;
    width: 100%;
    border-bottom: none;
  }
  
  @media (min-width: 768px) {
    .card-img-top,
    video.card-img-top {
      height: 300px;
    }
  }
  
  html[data-theme='light'] .project-card .card-img-top {
    background-color: #f1f5f9;
  }
  
  html[data-theme='dark'] .project-card .card-img-top {
    background-color: #0f172a;
  }
  
  .card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding: 5px;
    line-height: 1.4;
    height: auto;
    min-height: auto;
    overflow: visible;
    text-wrap: wrap;
    display: block;
    font-weight: 600;
  }
  
  html[data-theme='light'] .project-card .card-title {
    color: #0f172a;
  }
  
  html[data-theme='dark'] .project-card .card-title {
    color: #f8fafc;
  }
  
  .card-text {
    flex-grow: 1;
    padding: 0;
    overflow: visible;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    min-height: auto;
    font-size: 1.1rem;
  }
  
  html[data-theme='light'] .project-card .card-text {
    color: #ffffff !important;
  }
  
  html[data-theme='dark'] .project-card .card-text {
    color: #cbd5e1 !important;
  }
  
  /* Card buttons styling - similar to modal */
  .card-buttons {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  html[data-theme='light'] .card-buttons {
    border-top-color: rgba(0, 0, 0, 0.1);
  }
  
  html[data-theme='dark'] .card-buttons {
    border-top-color: rgba(255, 255, 255, 0.1);
  }
  
  .card-buttons .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
  
  html[data-theme='light'] .card-buttons .btn-outline-primary {
    color: #0284c7;
    border-color: #0284c7;
  }
  
  html[data-theme='dark'] .card-buttons .btn-outline-primary {
    color: #38bdf8;
    border-color: #38bdf8;
  }
  
  html[data-theme='light'] .card-buttons .btn-outline-primary:hover {
    background-color: #0284c7;
    color: white;
  }
  
  html[data-theme='dark'] .card-buttons .btn-outline-primary:hover {
    background-color: #38bdf8;
    color: #0f172a;
  }
  
  /* Badge container for tags (hidden in cards, shown in modal) */
  .badge-container {
    display: none;
  }
  
  /* Add these new styles for wider project cards */
  .container-fluid {
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  @media (max-width: 991px) {
    .container-fluid {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  
  @media (max-width: 767.98px) {
    .container-fluid {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .project-card .card {
    width: 100%;
    transition: all 0.3s ease;
    border-radius: 8px;
  }

  .project-card .card-img-top {
    height: 220px;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  
    .project-card {
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 991px) {
    .project-card {
      margin-bottom: 1.5rem;
    }
  }

  /* Improve card appearance */
  .project-card .card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  
  .project-card .card-body .card-buttons {
    margin-top: auto;
  }
  
  /* Card footer styling - greyish background to match site theme */
  .project-card .card-footer {
    background-color: #e5e7eb !important;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1rem 1.5rem;
    border-radius: 0 !important;
    border-bottom-left-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
  }
  
  html[data-theme='light'] .project-card .card-footer {
    background-color: #e5e7eb !important;
    border-top-color: rgba(0, 0, 0, 0.08);
  }
  
  html[data-theme='dark'] .project-card .card-footer {
    background-color: #374151 !important;
    border-top-color: rgba(255, 255, 255, 0.08);
  }
  
  /* Ensure card has proper overflow to prevent corner artifacts */
  .project-card .card {
    overflow: hidden;
  }
  
  /* Remove any box-shadow artifacts in corners */
  .project-card .card-footer::before,
  .project-card .card-footer::after {
    display: none !important;
  }

  .project-card .card-title {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }

  .project-card .card-text {
    font-size: 1.1rem !important;
    line-height: 1.6 !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    min-height: auto;
    margin-bottom: 1.5rem;
  }
  
  html[data-theme='light'] .project-card .card-text {
    color: #ffffff !important;
  }
  
  html[data-theme='dark'] .project-card .card-text {
    color: #cbd5e1 !important;
  }

  /* Adjust container width */
  .body {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
  }

  .container {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto !important;
  }

  .post {
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .project-card .project-tag {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.4rem !important;
    border-radius: 4px;
    background-color: rgba(13, 110, 253, 0.1);
    color: #0d6efd;
    /* margin: 0 !important; */
    display: inline-block;
  }
  
  /* Override Bootstrap margin classes that might be affecting tags */
  .badge.mr-2 {
    margin-right: 0 !important;
  }
  
  .badge.mb-2 {
    margin-bottom: 0 !important;
  }

  
  html[data-theme='dark'] .project-card .project-tag {
    background-color: rgba(13, 110, 253, 0.2);
  }
  
  html[data-theme='light'] .badge-primary {
    background-color: rgba(2, 132, 199, 0.1);
    color: #0284c7;
    border: 1px solid #0284c7;
    padding: 0.15rem 0.4rem;
    font-size: 0.75rem;
  }
  
  html[data-theme='dark'] .badge-primary {
    background-color: rgba(56, 189, 248, 0.2);
    color: #38bdf8;
    border: 1px solid #38bdf8;
    padding: 0.15rem 0.4rem;
    font-size: 0.75rem;
  }
  
  .project-card .badge-container {
    margin-bottom: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
  }
  
  .project-card .card-body {
    padding: 1.5rem;
  }

  /* Search styling */
  .search-container {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
  
  .search-input-wrapper {
    position: relative;
    flex-grow: 1;
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
  
  #search-input {
    width: 100%;
  }
  
  #search-input::placeholder {
    color: rgba(0, 0, 0, 0.4);
    opacity: 0.7;
  }
  
  html[data-theme='dark'] #search-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
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
  
  /* Search tags styling */
  .search-tag {
    display: inline-flex;
    align-items: center;
    border-radius: 20px;
    padding: 0.4rem 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1.5px solid transparent;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  html[data-theme='light'] .search-tag {
    background: linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(2, 132, 199, 0.18) 100%);
    color: #0284c7;
    border-color: rgba(2, 132, 199, 0.3);
    box-shadow: 0 1px 3px rgba(2, 132, 199, 0.15);
  }
  
  html[data-theme='dark'] .search-tag {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0.22) 100%);
    color: #38bdf8;
    border-color: rgba(56, 189, 248, 0.35);
    box-shadow: 0 1px 3px rgba(56, 189, 248, 0.2);
  }
  
  .search-tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
  }
  
  html[data-theme='dark'] .search-tag:hover {
    box-shadow: 0 2px 6px rgba(56, 189, 248, 0.3);
  }
  
  /* Active filters styling */
  #active-filters-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  #active-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
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
  
  /* Reset button styling - subtle */
  #reset-filters {
    transition: all 0.2s ease;
  }
  
  #reset-filters:hover {
    background-color: rgba(0, 0, 0, 0.05) !important;
    border-color: rgba(0, 0, 0, 0.15) !important;
  }
  
  html[data-theme='dark'] #reset-filters {
    border-color: rgba(255, 255, 255, 0.1) !important;
    color: #94a3b8 !important;
  }
  
  html[data-theme='dark'] #reset-filters:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.15) !important;
  }
</style>

<!-- Project Modal Styles -->
<style>
  /* Increase modal size */
  .modal-dialog {
    /* max-width: 900px; */
    min-width: 50%;
    display: flex;
    align-items: center;
    height: calc(100% - 0.5rem);
    min-height: 95vh;
    /* margin: 1.75rem auto; */
  }
  
  .modal-content {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    /* min-width: 80% !important; */
    /* min-height: 85%; */
  }
  
  .modal-image-container {
    height: 450px;
    background-color: #f1f5f9;
    position: relative;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .modal-image-container {
      height: 950px;
    }
  }
  
  /* Carousel styling */
  .carousel-item {
    height: 450px;
  }
  
  @media (min-width: 768px) {
    .carousel-item {
      height: 900px;
    }
  }
  
  .modal-body {
    padding: 2rem;
  }
  
  #modal-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  #modal-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  #modal-technologies {
    /* margin: 2rem; */
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  #modal-technologies .badge {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
  }
  
  /* Modal backdrop styling - darker background */
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.85);
  }
  
  .modal-backdrop.show {
    opacity: 1;
  }
  
  /* Center the modal dialog better */
  .modal-image-container {
    height: 250px;
    background-color: #f1f5f9;
    position: relative;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .modal-image-container {
      height: 300px;
    }
  }
  
  html[data-theme='dark'] .modal-image-container {
    background-color: #1e293b;
  }
  
  #modal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  #modal-image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Carousel styling */
  .carousel-item {
    height: 300px;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 10%;
    opacity: 0.7;
  }
  
  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    opacity: 1;
  }
  
  .carousel-indicators {
    bottom: 0;
  }
  
  html[data-theme='light'] .badge-primary {
    background-color: rgba(2, 132, 199, 0.1);
    color: #0284c7;
    border: 1px solid #0284c7;
  }
  
  html[data-theme='dark'] .badge-primary {
    background-color: rgba(56, 189, 248, 0.2);
    color: #38bdf8;
    border: 1px solid #38bdf8;
  }
  
  /* Modal animation */
  .modal.fade .modal-dialog {
    transform: translateY(20px);
    transition: transform 0.3s ease-out;
  }
  
  .modal.show .modal-dialog {
    transform: translateY(0);
  }
  
  /* Theme-specific modal styling */
  html[data-theme='light'] .modal-content {
    background-color: #ffffff;
    color: #1e293b;
  }
  
  html[data-theme='dark'] .modal-content {
    background-color: #1e293b;
    color: #f8fafc;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  html[data-theme='light'] .modal-body {
    color: #475569;
  }
  
  html[data-theme='dark'] .modal-body {
    color: #cbd5e1;
  }
  
  html[data-theme='light'] #modal-title {
    color: #0f172a;
  }
  
  html[data-theme='dark'] #modal-title {
    color: #f8fafc;
  }
  
  html[data-theme='light'] #modal-description {
    color: #475569;
  }
  
  html[data-theme='dark'] #modal-description {
    color: #cbd5e1;
  }
  
  html[data-theme='light'] .modal-body .border-top {
    border-top-color: rgba(0, 0, 0, 0.1) !important;
  }
  
  html[data-theme='dark'] .modal-body .border-top {
    border-top-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  /* Button styling for different themes */
  html[data-theme='light'] .btn-outline-primary {
    color: #0284c7;
    border-color: #0284c7;
  }
  
  html[data-theme='dark'] .btn-outline-primary {
    color: #38bdf8;
    border-color: #38bdf8;
  }
  
  html[data-theme='light'] .btn-outline-primary:hover {
    background-color: #0284c7;
    color: white;
  }
  
  html[data-theme='dark'] .btn-outline-primary:hover {
    background-color: #38bdf8;
    color: #0f172a;
  }
  
  /* Close button styling */
  html[data-theme='light'] #close-modal {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
  
  html[data-theme='dark'] #close-modal {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
  
  /* Modal image container theme-specific styling */
  html[data-theme='light'] .modal-image-container {
    background-color: #f1f5f9;
  }
  
  html[data-theme='dark'] .modal-image-container {
    background-color: #0f172a;
  }
  
  /* Carousel controls theme-specific styling */
  html[data-theme='dark'] .carousel-control-prev-icon,
  html[data-theme='dark'] .carousel-control-next-icon {
    filter: brightness(1.2);
  }
  
  html[data-theme='dark'] .carousel-indicators li {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  html[data-theme='dark'] .carousel-indicators li.active {
    background-color: white;
  }
  
  /* Image placeholder theme-specific styling */
  html[data-theme='light'] #modal-image-placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  
  html[data-theme='dark'] #modal-image-placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
</style>

<!-- Project Modal -->
<div class="modal fade" id="project-modal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" style="height: 95vh !important; max-height: 95vh !important;">
    <div class="modal-content">
      <!-- Image Section -->
      <div class="modal-image-container">
        <!-- Single Image Display -->
        <div id="single-image-container">
          <img id="modal-image" src="" alt="Project Image" class="w-100 h-100 object-fit-cover">
          <div id="modal-image-placeholder" class="d-none">
            <i class="fas fa-image fa-4x opacity-30"></i>
          </div>
        </div>
        
        <!-- Carousel for Multiple Images -->
        <div id="project-image-carousel" class="carousel slide d-none" data-ride="carousel">
          <ol class="carousel-indicators" id="carousel-indicators">
            <!-- Indicators will be added dynamically -->
          </ol>
          <div class="carousel-inner" id="carousel-inner">
            <!-- Carousel items will be added dynamically -->
          </div>
          <a class="carousel-control-prev" href="#project-image-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#project-image-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        
        <span id="modal-category" class="badge badge-primary position-absolute" style="top: 1rem; left: 1rem; z-index: 10;"></span>
        <button id="close-modal" type="button" class="close position-absolute" data-dismiss="modal" aria-label="Close" style="top: 1rem; right: 1rem; background: rgba(0,0,0,0.5); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; z-index: 10; font-size: 1.5rem;">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <!-- Content Section -->
      <div class="modal-body">
        <h2 id="modal-title" class="font-weight-bold"></h2>
        <small id="modal-date" class="text-muted d-block mb-2" style="display: none;">
          <i class="far fa-calendar mr-1"></i><span id="modal-date-text"></span>
        </small>
        <p id="modal-description"></p>
        
        <!-- Technologies -->
        <div id="modal-technologies" class="mb-4"></div>
        
        <!-- Links -->
        <div class="d-flex pt-4 border-top flex-wrap">
          <a id="modal-github" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary mr-3 mb-2">
            <i class="fab fa-github mr-2"></i> GitHub
          </a>
          <a id="modal-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary mr-3 mb-2">
            <i class="fas fa-external-link-alt mr-2"></i> Link
          </a>
          <a id="modal-live" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary mr-3 mb-2">
            <i class="fas fa-globe mr-2"></i> Live Demo
          </a>
          <a id="modal-details" href="#" class="btn btn-outline-primary ml-auto mb-2">
            <i class="fas fa-info-circle mr-2"></i> View Details
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Function to sort and reorder projects
  function sortProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
      return [];
    }
    
    // Get all projects (create a new array to avoid mutation issues)
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    if (projectCards.length === 0) {
      return [];
    }
    
    // Create a copy and sort it (don't mutate original)
    const sortedCards = [...projectCards].sort((a, b) => {
      const dateA = a.getAttribute('data-date') || '1900-01-01';
      const dateB = b.getAttribute('data-date') || '1900-01-01';
      const showDateA = a.getAttribute('data-show-date') === 'true';
      const showDateB = b.getAttribute('data-show-date') === 'true';
      const hasImportanceA = a.getAttribute('data-has-importance') === 'true';
      const hasImportanceB = b.getAttribute('data-has-importance') === 'true';
      const importanceA = parseInt(a.getAttribute('data-importance') || '9999');
      const importanceB = parseInt(b.getAttribute('data-importance') || '9999');
      
      // Check if project has a valid date (not default, not null, not empty)
      const hasDateA = dateA && dateA !== '1900-01-01' && dateA !== 'null' && dateA !== 'undefined' && dateA.trim() !== '';
      const hasDateB = dateB && dateB !== '1900-01-01' && dateB !== 'null' && dateB !== 'undefined' && dateB.trim() !== '';
      
      // Check if project should show date (has date AND show_date is true)
      const shouldShowDateA = hasDateA && showDateA;
      const shouldShowDateB = hasDateB && showDateB;
      
      // Priority 1: Projects with date AND show_date:true come before all others
      if (shouldShowDateA && !shouldShowDateB) {
        return -1; // a comes first
      }
      if (!shouldShowDateA && shouldShowDateB) {
        return 1; // b comes first
      }
      
      // Priority 2: If both have date AND show_date:true, sort by date (descending - most recent first)
      if (shouldShowDateA && shouldShowDateB) {
        if (dateA !== dateB) {
          return dateB.localeCompare(dateA); // Most recent first
        }
        // Same date: sort by importance (ascending - lower number = higher importance)
        // But projects with importance come before those without
        if (hasImportanceA && !hasImportanceB) return -1;
        if (!hasImportanceA && hasImportanceB) return 1;
        return importanceA - importanceB;
      }
      
      // Priority 3: Neither has date+show_date:true
      // Projects with importance come before projects without importance
      if (hasImportanceA && !hasImportanceB) {
        return -1; // a comes first (has importance)
      }
      if (!hasImportanceA && hasImportanceB) {
        return 1; // b comes first (has importance)
      }
      
      // Both have or both don't have importance: sort by importance value
      return importanceA - importanceB;
    });
    
    // Re-order cards in DOM by moving them to correct positions
    // This preserves event listeners and other DOM properties
    sortedCards.forEach((card, index) => {
      const currentIndex = Array.from(projectsGrid.children).indexOf(card);
      if (currentIndex !== index) {
        // Card is not in the right position, move it
        if (index === 0) {
          // Move to beginning
          projectsGrid.insertBefore(card, projectsGrid.firstChild);
        } else if (index >= projectsGrid.children.length) {
          // Move to end
          projectsGrid.appendChild(card);
        } else {
          // Move to specific position
          const referenceNode = projectsGrid.children[index];
          if (referenceNode !== card) {
            projectsGrid.insertBefore(card, referenceNode);
          }
        }
      }
    });
    
    // Verify: Log first 3 to confirm sort worked
    const firstThree = sortedCards.slice(0, 3).map(c => ({
      title: c.getAttribute('data-title'),
      date: c.getAttribute('data-date'),
      showDate: c.getAttribute('data-show-date'),
      hasDateAndShow: c.getAttribute('data-date') && c.getAttribute('data-date') !== '1900-01-01' && c.getAttribute('data-show-date') === 'true'
    }));
    console.log('Projects sorted. First 3:', firstThree);
    
    // Double-check: Verify DOM order matches sorted order
    const domOrder = Array.from(projectsGrid.children).slice(0, 3).map(c => c.getAttribute('data-title'));
    const sortedOrder = sortedCards.slice(0, 3).map(c => c.getAttribute('data-title'));
    if (JSON.stringify(domOrder) !== JSON.stringify(sortedOrder)) {
      console.warn('DOM order does not match sorted order! Re-appending...');
      // Fallback: Clear and re-append if order doesn't match
      while (projectsGrid.firstChild) {
        projectsGrid.removeChild(projectsGrid.firstChild);
      }
      sortedCards.forEach(card => {
        projectsGrid.appendChild(card);
      });
    }
    
    return sortedCards;
  }
  
  // Run sort immediately when DOM is ready
  function initializeProjects() {
    // Sort projects first, before any other operations
    let projectCardsArray = sortProjects();
    
    if (!projectCardsArray || projectCardsArray.length === 0) {
      // If sort didn't work, try again after a short delay
      setTimeout(() => {
        projectCardsArray = sortProjects();
        if (projectCardsArray && projectCardsArray.length > 0) {
          continueInitialization(projectCardsArray);
        }
      }, 100);
      return;
    }
    
    continueInitialization(projectCardsArray);
  }
  
  function continueInitialization(projectCardsArray) {
    
    // Get all projects (after sorting)
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    const noProjectsMessage = document.getElementById('no-projects-message');
    const projectCount = document.getElementById('project-count');
    
    // Filter elements
    // Get filter elements - support both sidebar and horizontal layouts
    const searchInput = document.getElementById('search-input') || document.getElementById('search-input-horizontal');
    const searchInputHorizontal = document.getElementById('search-input-horizontal');
    const clearSearchBtn = document.getElementById('clear-search') || document.getElementById('clear-search-horizontal');
    const clearSearchBtnHorizontal = document.getElementById('clear-search-horizontal');
    const addSearchTagBtn = document.getElementById('add-search-tag') || document.getElementById('add-search-tag-horizontal');
    const addSearchTagBtnHorizontal = document.getElementById('add-search-tag-horizontal');
    const searchTagsContainer = document.getElementById('search-tags') || document.getElementById('search-tags-horizontal');
    const searchTagsContainerHorizontal = document.getElementById('search-tags-horizontal');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const techFiltersContainer = document.getElementById('tech-filters') || document.getElementById('tech-filters-horizontal');
    const techFiltersContainerHorizontal = document.getElementById('tech-filters-horizontal');
    const activeFiltersSection = document.getElementById('active-filters-section') || document.getElementById('active-filters-section-horizontal');
    const activeFiltersContainer = document.getElementById('active-filters') || document.getElementById('active-filters-horizontal');
    const resetFiltersBtn = document.getElementById('reset-filters') || document.getElementById('reset-filters-horizontal');
    const resetFiltersAltBtn = document.getElementById('reset-filters-alt');
    
    // Filter state
    let selectedCategories = ['All'];
    let selectedTechs = ['All'];
    let searchTags = [];
    let searchQuery = '';
    
    // Extract all unique tags from projects (use sorted array)
    const allTags = new Set();
    projectCardsArray.forEach(card => {
      const tags = card.getAttribute('data-tags').split(',').filter(tag => tag.trim() !== '');
      tags.forEach(tag => allTags.add(tag.trim()));
    });
    
    // Populate tech filters
    allTags.forEach(tag => {
      if (tag && techFiltersContainer) { // Only add non-empty tags
        const btn = document.createElement('button');
        btn.className = 'filter-btn tech-btn mb-2 mr-2';
        btn.setAttribute('data-tech', tag);
        btn.textContent = tag;
        btn.addEventListener('click', () => toggleTech(tag));
        techFiltersContainer.appendChild(btn);
      }
    });
    
    // Update project count
    updateProjectCount();
    
    // Add event listeners
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => toggleCategory(btn.getAttribute('data-category')));
    });
    
    // Sync search inputs between sidebar and horizontal sections
    function syncSearchInputs(sourceInput, targetInput) {
      if (sourceInput && targetInput) {
        targetInput.value = sourceInput.value;
      }
    }
    
    // Listen for input changes in the search box for real-time filtering
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        if (searchInputHorizontal) syncSearchInputs(searchInput, searchInputHorizontal);
        applySearch();
        updateActiveFilters();
        
        // Debounce URL update
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(updateUrlWithFilters, 500);
      });
      
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim()) {
          e.preventDefault();
          addSearchTag();
        } else if (e.key === ',' && searchInput.value.trim()) {
          e.preventDefault();
          addSearchTag();
        }
      });
    }
    
    // Horizontal search input listeners
    if (searchInputHorizontal) {
      searchInputHorizontal.addEventListener('input', function() {
        if (searchInput) syncSearchInputs(searchInputHorizontal, searchInput);
        applySearch();
        updateActiveFilters();
        
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(updateUrlWithFilters, 500);
      });
      
      searchInputHorizontal.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && searchInputHorizontal.value.trim()) {
          e.preventDefault();
          addSearchTag();
        } else if (e.key === ',' && searchInputHorizontal.value.trim()) {
          e.preventDefault();
          addSearchTag();
        }
      });
    }
    
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (searchInputHorizontal) searchInputHorizontal.value = '';
        searchQuery = '';
        applySearch();
        updateActiveFilters();
      });
    }
    
    if (clearSearchBtnHorizontal) {
      clearSearchBtnHorizontal.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (searchInputHorizontal) searchInputHorizontal.value = '';
        searchQuery = '';
        applySearch();
        updateActiveFilters();
      });
    }
    
    if (addSearchTagBtn) {
      addSearchTagBtn.addEventListener('click', addSearchTag);
    }
    
    if (addSearchTagBtnHorizontal) {
      addSearchTagBtnHorizontal.addEventListener('click', addSearchTag);
    }
    
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetFilters);
    }
    if (resetFiltersAltBtn) {
      resetFiltersAltBtn.addEventListener('click', resetFilters);
    }
    
    // Filter section toggle with localStorage persistence
    const filterToggle = document.getElementById('filter-toggle');
    const filterSection = document.getElementById('filter-section-horizontal');
    const toggleText = document.getElementById('toggle-text');
    
    // Function to save filter section visibility state
    function saveFilterSectionState(isVisible) {
      try {
        localStorage.setItem('projects-filter-section-visible', isVisible ? 'true' : 'false');
      } catch (e) {
        console.warn('Failed to save filter section state:', e);
      }
    }
    
    // Function to load filter section visibility state
    function loadFilterSectionState() {
      try {
        const stored = localStorage.getItem('projects-filter-section-visible');
        if (stored === 'false') return false;
        if (stored === 'true') return true;
      } catch (e) {
        console.warn('Failed to load filter section state:', e);
      }
      return true; // Default to visible
    }
    
    // Initialize filter section state on page load
    if (filterSection && toggleText) {
      const isVisible = loadFilterSectionState();
      if (!isVisible) {
        filterSection.classList.add('hidden');
        if (toggleText) toggleText.textContent = 'Show Filters';
      } else {
        filterSection.classList.remove('hidden');
        if (toggleText) toggleText.textContent = 'Hide Filters';
      }
    }
    
    if (filterToggle && filterSection && toggleText) {
      filterToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isHidden = filterSection.classList.contains('hidden');
        
        if (isHidden) {
          filterSection.classList.remove('hidden');
          toggleText.textContent = 'Hide Filters';
          saveFilterSectionState(true);
        } else {
          filterSection.classList.add('hidden');
          toggleText.textContent = 'Show Filters';
          saveFilterSectionState(false);
        }
      });
    }
    
    // Collapsible filter sections functionality with localStorage
    const collapseToggles = document.querySelectorAll('.filter-collapse-toggle');
    
    // Function to get section ID from toggle element
    function getSectionId(toggle) {
      const heading = toggle.querySelector('span');
      if (heading) {
        const text = heading.textContent.trim();
        if (text === 'Categories') return 'categories';
        if (text === 'Technologies') return 'technologies';
      }
      return null;
    }
    
    // Function to save state to localStorage
    function saveCollapseState(sectionId, isExpanded) {
      try {
        if (sectionId) {
          const key = `filter-section-${sectionId}`;
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
          const key = `filter-section-${sectionId}`;
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
      
      // Default states: Categories expanded, Technologies collapsed
      const defaultExpanded = sectionId === 'categories';
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
    
    // Function to toggle category selection
    function toggleCategory(category) {
      if (category === 'All') {
        selectedCategories = ['All'];
      } else {
        const newCategories = selectedCategories.filter(c => c !== 'All');
        
        if (newCategories.includes(category)) {
          if (newCategories.length === 1) {
            selectedCategories = ['All'];
          } else {
            selectedCategories = newCategories.filter(c => c !== category);
          }
        } else {
          selectedCategories = [...newCategories, category];
        }
      }
      
      updateCategoryButtons();
      applySearch();
      updateActiveFilters();
    }
    
    // Function to toggle technology selection
    function toggleTech(tech) {
      if (tech === 'All') {
        selectedTechs = ['All'];
      } else {
        const newTechs = selectedTechs.filter(t => t !== 'All');
        
        if (newTechs.includes(tech)) {
          if (newTechs.length === 1) {
            selectedTechs = ['All'];
          } else {
            selectedTechs = newTechs.filter(t => t !== tech);
          }
        } else {
          selectedTechs = [...newTechs, tech];
        }
      }
      
      updateTechButtons();
      applySearch();
      updateActiveFilters();
    }
    
    // Function to add search tag
    function addSearchTag() {
      const currentInput = searchInput || searchInputHorizontal;
      const tag = currentInput ? currentInput.value.trim() : '';
      if (tag && !searchTags.includes(tag)) {
        searchTags.push(tag);
        if (searchInput) searchInput.value = '';
        if (searchInputHorizontal) searchInputHorizontal.value = '';
        searchQuery = '';
        updateSearchTags();
        applySearch();
        updateActiveFilters();
        updateUrlWithFilters(); // Update URL when search tags change
      }
    }
    
    // Function to remove search tag
    function removeSearchTag(tag) {
      searchTags = searchTags.filter(t => t !== tag);
      updateSearchTags();
      applySearch();
      updateActiveFilters();
      updateUrlWithFilters(); // Update URL when search tags change
    }
    
    // Function to update category buttons
    function updateCategoryButtons() {
      categoryBtns.forEach(btn => {
        const category = btn.getAttribute('data-category');
        if (selectedCategories.includes(category)) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      });
    }
    
    // Function to update tech buttons
    function updateTechButtons() {
      document.querySelectorAll('.tech-btn').forEach(btn => {
        const tech = btn.getAttribute('data-tech');
        if (selectedTechs.includes(tech)) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      });
    }
    
    // Function to update search tags display
    function updateSearchTags() {
      const containers = [searchTagsContainer, searchTagsContainerHorizontal].filter(c => c);
      containers.forEach(container => {
        container.innerHTML = '';
        searchTags.forEach(tag => {
          const tagElement = document.createElement('div');
          tagElement.className = 'search-tag';
          tagElement.innerHTML = `
            ${tag}
            <span class="remove-tag" onclick="event.stopPropagation();">
              <i class="fas fa-times"></i>
            </span>
          `;
          tagElement.querySelector('.remove-tag').addEventListener('click', () => removeSearchTag(tag));
          container.appendChild(tagElement);
        });
      });
    }
    
    // Function to update active filters display
    function updateActiveFilters() {
      const activeFiltersContainers = [
        document.getElementById('active-filters'),
        document.getElementById('active-filters-horizontal')
      ].filter(c => c);
      
      activeFiltersContainers.forEach(container => {
        container.innerHTML = '';
      });
      
      let hasActiveFilters = false;
      
      // Add category filters
      if (!selectedCategories.includes('All')) {
        hasActiveFilters = true;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
          Categories:  <strong>${selectedCategories.join(', ')}</strong>
          <span class="remove-filter" onclick="event.stopPropagation();">
            <i class="fas fa-times"></i>
          </span>
        `;
        activeFiltersContainers.forEach(container => {
          const clonedElement = filterElement.cloneNode(true);
          clonedElement.querySelector('.remove-filter').addEventListener('click', () => {
            selectedCategories = ['All'];
            updateCategoryButtons();
            applySearch();
            updateActiveFilters();
          });
          container.appendChild(clonedElement);
        });
      }
      
      // Add tech filters
      if (!selectedTechs.includes('All')) {
        hasActiveFilters = true;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
          Technologies: <strong>${selectedTechs.join(', ')}</strong>
          <span class="remove-filter" onclick="event.stopPropagation();">
            <i class="fas fa-times"></i>
          </span>
        `;
        activeFiltersContainers.forEach(container => {
          const clonedElement = filterElement.cloneNode(true);
          clonedElement.querySelector('.remove-filter').addEventListener('click', () => {
            selectedTechs = ['All'];
            updateTechButtons();
            applySearch();
            updateActiveFilters();
          });
          container.appendChild(clonedElement);
        });
      }
      
      // Add search query filter
      if (searchQuery) {
        hasActiveFilters = true;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
          Search: <strong>${searchQuery}</strong>
          <span class="remove-filter" onclick="event.stopPropagation();">
            <i class="fas fa-times"></i>
          </span>
        `;
        activeFiltersContainers.forEach(container => {
          const clonedElement = filterElement.cloneNode(true);
          clonedElement.querySelector('.remove-filter').addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (searchInputHorizontal) searchInputHorizontal.value = '';
            searchQuery = '';
            applySearch();
            updateActiveFilters();
          });
          container.appendChild(clonedElement);
        });
      }
      
      // Add search tags filters
      if (searchTags.length > 0) {
        hasActiveFilters = true;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
          Search Tags: <strong>${searchTags.join(', ')}</strong>
          <span class="remove-filter" onclick="event.stopPropagation();">
            <i class="fas fa-times"></i>
          </span>
        `;
        activeFiltersContainers.forEach(container => {
          const clonedElement = filterElement.cloneNode(true);
          clonedElement.querySelector('.remove-filter').addEventListener('click', () => {
            searchTags = [];
            updateSearchTags();
            applySearch();
            updateActiveFilters();
          });
          container.appendChild(clonedElement);
        });
      }
      
      // Show/hide active filters sections
      const activeFiltersSections = [
        document.getElementById('active-filters-section'),
        document.getElementById('active-filters-section-horizontal')
      ].filter(s => s);
      
      activeFiltersSections.forEach(section => {
        if (hasActiveFilters) {
          section.classList.remove('d-none');
        } else {
          section.classList.add('d-none');
        }
      });
    }
    
    // Function to reset all filters
    function resetFilters() {
      selectedCategories = ['All'];
      selectedTechs = ['All'];
      searchTags = [];
      if (searchInput) searchInput.value = '';
      if (searchInputHorizontal) searchInputHorizontal.value = '';
      searchQuery = '';
      
      updateCategoryButtons();
      updateTechButtons();
      updateSearchTags();
      applySearch();
      updateActiveFilters();
    }
    
    // Enhanced search functionality for multiple terms
    function applySearch() {
      const currentInput = searchInput || searchInputHorizontal;
      const searchValue = currentInput ? currentInput.value.toLowerCase() : '';
      
      // Support for multiple search terms separated by commas or spaces
      let searchTerms = [];
      if (searchValue.includes(',')) {
        // Split by comma if commas are present
        searchTerms = searchValue.split(',').map(term => term.trim()).filter(term => term.length > 0);
      } else if (searchValue.includes(' ')) {
        // Split by space if no commas but spaces are present
        searchTerms = searchValue.split(' ').filter(term => term.length > 0);
      } else if (searchValue.length > 0) {
        // Single search term
        searchTerms = [searchValue];
      }
      
      // Apply search filtering (use sorted array to maintain order)
      projectCardsArray.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        const cardDesc = card.querySelector('.card-text').textContent.toLowerCase();
        const cardTags = Array.from(card.querySelectorAll('.project-tag')).map(tag => tag.textContent.toLowerCase());
        
        // Check if any search term matches
        const matchesSearch = searchTerms.length === 0 || searchTerms.some(term => 
          cardTitle.includes(term) || 
          cardDesc.includes(term) || 
          cardTags.some(tag => tag.includes(term))
        );
        
        // Update card visibility based on search match
        if (matchesSearch) {
          card.dataset.searchMatch = 'true';
        } else {
          card.dataset.searchMatch = 'false';
        }
      });
      
      updateVisibleProjects();
    }
    
    // Function to update visible projects (preserves sorted order)
    function updateVisibleProjects() {
      let visibleCount = 0;
      
      // Use projectCardsArray which maintains the sorted order
      projectCardsArray.forEach(card => {
        const categoryAttr = card.getAttribute('data-category') || '';
        const title = card.getAttribute('data-title').toLowerCase();
        const description = card.getAttribute('data-description').toLowerCase();
        const tags = card.getAttribute('data-tags').split(',').map(tag => tag.trim().toLowerCase()).join(',');
        
        // Parse project categories - handle comma-separated values
        const projectCategories = categoryAttr 
          ? categoryAttr.split(',').map(c => c.trim()).filter(c => c)
          : [];
        
        // Check if project matches category filter
        // Match if "All" is selected OR if any selected category matches any project category
        const matchesCategory = selectedCategories.includes('All') || 
          (projectCategories.length > 0 && selectedCategories.some(selectedCat => 
            projectCategories.some(projectCat => projectCat === selectedCat)
          ));
        
        // Check if project matches tech filter
        const matchesTech = selectedTechs.includes('All') || 
                           selectedTechs.some(tech => tags.includes(tech.toLowerCase()));
        
        // Check if project matches search query
        const matchesSearch = card.dataset.searchMatch === 'true';
        
        // Check if project matches any search tags
        const matchesTags = searchTags.length === 0 || 
                           searchTags.some(tag => {
                             const tagLower = tag.toLowerCase();
                             return title.includes(tagLower) || 
                                    description.includes(tagLower) || 
                                    tags.includes(tagLower);
                           });
        
        // Show/hide project based on filters
        if (matchesCategory && matchesTech && matchesSearch && matchesTags) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Show/hide no projects message
      if (visibleCount === 0) {
        noProjectsMessage.classList.remove('d-none');
        projectsGrid.classList.add('d-none');
      } else {
        noProjectsMessage.classList.add('d-none');
        projectsGrid.classList.remove('d-none');
      }
      
      // Update project count
      updateProjectCount(visibleCount);
    }
    
    // Function to update project count
    function updateProjectCount(visibleCount = projectCards.length) {
      projectCount.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
    }
    
    // URL parameter filtering functionality
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
    
    // Apply filters from URL parameters if they exist
    if (tagParam) {
      // Support for multiple tags separated by commas
      const tags = tagParam.split(',').map(tag => tag.trim().toLowerCase());
      
      // Find and activate the tag filters
      const tagButtons = document.querySelectorAll('.tech-btn');
      tagButtons.forEach(btn => {
        const btnText = btn.textContent.trim().toLowerCase();
        if (tags.includes(btnText)) {
          btn.click();
        }
      });
    }
    
    // Apply search tags from URL (tags=tag1,tag2)
    if (tagsParam) {
      // Support for multiple search tags separated by commas
      const tags = tagsParam.split(',').map(tag => tag.trim());
      searchTags = tags; // Set the search tags array
      updateSearchTags(); // Update the display
      applySearch(); // Apply the filtering
    }
    
    if (categoryParam) {
      // Support for multiple categories separated by commas
      const categories = categoryParam.split(',').map(cat => cat.trim().toLowerCase());
      
      // Find and activate the category filters
      const categoryButtons = document.querySelectorAll('.category-btn');
      categoryButtons.forEach(btn => {
        const btnText = btn.textContent.trim().toLowerCase();
        if (categories.includes(btnText)) {
          btn.click();
        }
      });
    }
    
    if (searchParam) {
      // Set the search input and trigger filtering
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.value = searchParam;
        // Trigger the input event to apply the search filter
        searchInput.dispatchEvent(new Event('input'));
      }
    }
    
    // Update URL when filters change
    function updateUrlWithFilters() {
      // Get current filters
      const activeCategories = Array.from(document.querySelectorAll('.category-btn.active'))
        .map(btn => btn.textContent.trim())
        .filter(cat => cat !== 'All');
      
      const activeTags = Array.from(document.querySelectorAll('.tech-btn.active'))
        .map(btn => btn.textContent.trim());
      
      const searchInputEl = document.getElementById('search-input') || document.getElementById('search-input-horizontal');
      const searchValue = searchInputEl ? searchInputEl.value : '';
      
      // Build URL parameters
      let params = new URLSearchParams();
      
      if (activeCategories.length > 0) {
        params.set('category', activeCategories.map(cat => cat.toLowerCase()).join(','));
      }
      
      if (activeTags.length > 0) {
        params.set('tag', activeTags.map(tag => tag.toLowerCase()).join(','));
      }
      
      // Add search tags (the ones added via Enter/comma)
      if (searchTags.length > 0) {
        params.set('tags', searchTags.join(','));
      }
      
      if (searchValue) {
        // Support for multiple search terms separated by commas or spaces
        params.set('search', searchValue);
      }
      
      // Update URL without reloading the page
      const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
      window.history.replaceState({}, '', newUrl);
    }
    
    // Add event listeners to update URL when filters change
    document.querySelectorAll('.category-btn, .tech-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        // Small delay to allow the filter to be applied first
        setTimeout(updateUrlWithFilters, 100);
      });
    });
    
    document.getElementById('search-input').addEventListener('input', function() {
      // Debounce to avoid too many URL updates while typing
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(updateUrlWithFilters, 500);
    });
    
    // Clear filters button should also update URL
    document.getElementById('reset-filters').addEventListener('click', function() {
      // Small delay to allow the filters to be cleared first
      setTimeout(function() {
        window.history.replaceState({}, '', window.location.pathname);
      }, 100);
    });
    
    // Initialize
    updateCategoryButtons();
    updateTechButtons();
    updateSearchTags();
    updateActiveFilters();
    
      // Add animation to cards on load
      projectCardsArray.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProjects);
  } else {
    // DOM is already ready
    initializeProjects();
  }
</script>

<script>
  function openProjectModal(card) {
    console.log('Opening modal for:', card);
    
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalImagePlaceholder = document.getElementById('modal-image-placeholder');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDateText = document.getElementById('modal-date-text');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalGithub = document.getElementById('modal-github');
    const modalLink = document.getElementById('modal-link');
    const modalLive = document.getElementById('modal-live');
    const modalDetails = document.getElementById('modal-details');
    const singleImageContainer = document.getElementById('single-image-container');
    const projectImageCarousel = document.getElementById('project-image-carousel');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const carouselInner = document.getElementById('carousel-inner');
    
    // Set modal content - handle multiple categories
    const categoryAttr = card.getAttribute('data-category') || '';
    let categories = [];
    
    // Parse category attribute - could be array string, comma-separated, or single value
    if (categoryAttr) {
      // Try to parse as JSON array first
      try {
        const parsed = JSON.parse(categoryAttr);
        if (Array.isArray(parsed)) {
          categories = parsed;
        } else {
          categories = [parsed];
        }
      } catch (e) {
        // Not JSON, try comma-separated or single value
        if (categoryAttr.includes(',')) {
          categories = categoryAttr.split(',').map(c => c.trim()).filter(c => c);
        } else {
          categories = [categoryAttr.trim()].filter(c => c);
        }
      }
    }
    
    // Display categories as 'category, category' format
    modalCategory.textContent = categories.length > 0 ? categories.join(', ') : '';
    modalTitle.textContent = card.getAttribute('data-title') || '';
    
    // Set date if available and show_date is true
    const projectDate = card.getAttribute('data-date');
    const showDate = card.getAttribute('data-show-date') === 'true';
    if (showDate && projectDate && projectDate !== '1900-01-01') {
      const dateObj = new Date(projectDate);
      const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      modalDateText.textContent = formattedDate;
      modalDate.style.display = 'block';
    } else {
      modalDate.style.display = 'none';
    }
    
    modalDescription.textContent = card.getAttribute('data-description') || '';
    
    // Set technologies
    const tagsAttr = card.getAttribute('data-tags');
    const tags = tagsAttr ? tagsAttr.split(',').filter(tag => tag.trim() !== '') : [];
    modalTechnologies.innerHTML = '';
    tags.forEach(tag => {
      const techElement = document.createElement('span');
      techElement.className = 'badge badge-primary mr-2 mb-2';
      techElement.textContent = tag.trim();
      modalTechnologies.appendChild(techElement);
    });
    
    // Set links - show both link and github if both are present
    const linkUrl = card.getAttribute('data-link');
    const githubUrl = card.getAttribute('data-github');
    const liveUrl = card.getAttribute('data-live');
    const detailsUrl = card.getAttribute('data-details');
    
    // Helper function to check if URL is valid
    const isValidUrl = (url) => {
      return url && url !== "null" && url !== "undefined" && url !== "";
    };
    
    // Helper to check if URL is a repository URL (not GitHub Pages)
    const isRepoUrl = (url) => {
      if (!url) return false;
      // Repo URLs: https://github.com/username/repo or https://gitlab.com/username/repo
      // NOT GitHub Pages: https://username.github.io/portfolio
      return (url.includes('/github.com/') || url.includes('/gitlab.com/')) && !url.includes('github.io');
    };
    
    // 1. Handle github field - always show in modal-github if present
    if (isValidUrl(githubUrl)) {
      modalGithub.href = githubUrl;
      modalGithub.style.display = 'flex';
      if (githubUrl.includes('github.com')) {
        modalGithub.innerHTML = '<i class="fab fa-github mr-2"></i> GitHub';
      } else if (githubUrl.includes('gitlab.com')) {
        modalGithub.innerHTML = '<i class="fab fa-gitlab mr-2"></i> GitLab';
      } else {
        modalGithub.innerHTML = '<i class="fab fa-github mr-2"></i> Code';
      }
    } else if (isValidUrl(linkUrl) && isRepoUrl(linkUrl)) {
      // No github field, but link is a repo URL - show in modal-github
      modalGithub.href = linkUrl;
      modalGithub.style.display = 'flex';
      if (linkUrl.includes('github.com')) {
        modalGithub.innerHTML = '<i class="fab fa-github mr-2"></i> GitHub';
      } else {
        modalGithub.innerHTML = '<i class="fab fa-gitlab mr-2"></i> GitLab';
      }
    } else {
      modalGithub.style.display = 'none';
    }
    
    // 2. Handle link field - show in modal-link if it's NOT a repo URL and different from github
    if (isValidUrl(linkUrl)) {
      const linkIsRepo = isRepoUrl(linkUrl);
      const isDifferentFromGithub = linkUrl !== githubUrl;
      
      // Show link button if: it's not a repo URL AND it's different from github
      if (!linkIsRepo && isDifferentFromGithub) {
        modalLink.href = linkUrl;
        modalLink.style.display = 'flex';
        modalLink.innerHTML = '<i class="fas fa-external-link-alt mr-2"></i> Link';
      } else {
        // Link is a repo URL or same as github, don't show link button
        modalLink.style.display = 'none';
      }
    } else {
      modalLink.style.display = 'none';
    }
    
    // 3. Handle live field - show in modal-live
    if (isValidUrl(liveUrl)) {
      modalLive.href = liveUrl;
      modalLive.style.display = 'flex';
      modalLive.innerHTML = '<i class="fas fa-globe mr-2"></i> Live Demo';
    } else {
      modalLive.style.display = 'none';
    }
    
    if (liveUrl && liveUrl !== "null" && liveUrl !== "undefined" && liveUrl !== "") {
      modalLive.href = liveUrl;
      modalLive.style.display = 'flex';
    } else {
      modalLive.style.display = 'none';
    }
    
    if (detailsUrl && detailsUrl !== "null" && detailsUrl !== "undefined" && detailsUrl !== "") {
      modalDetails.href = detailsUrl;
      modalDetails.style.display = 'flex';
    } else {
      modalDetails.style.display = 'none';
    }
    
    // Handle images - single image or carousel
    const imageAttr = card.getAttribute('data-image');
    if (!imageAttr || imageAttr === "null" || imageAttr === "undefined" || imageAttr === "") {
      // No images available
      singleImageContainer.style.display = 'block';
      projectImageCarousel.classList.add('d-none');
      modalImage.style.display = 'none';
      modalImagePlaceholder.classList.remove('d-none');
      modalImagePlaceholder.style.display = 'flex';
      console.log('No images available');
      
    } else {
      const images = imageAttr.split(',').filter(img => img.trim() !== '');
      console.log('Images found:', images);
      
      if (images.length === 0) {
        // No valid images
        singleImageContainer.style.display = 'block';
        projectImageCarousel.classList.add('d-none');
        modalImage.style.display = 'none';
        modalImagePlaceholder.classList.remove('d-none');
        modalImagePlaceholder.style.display = 'flex';
        
      } else if (images.length === 1) {
        // Single image
        console.log('Using single image:', images[0]);
        singleImageContainer.style.display = 'block';
        projectImageCarousel.classList.add('d-none');
        
        modalImage.src = images[0].trim();
        modalImage.style.display = 'block';
        modalImagePlaceholder.classList.add('d-none');
        
        modalImage.onerror = () => {
          console.log('Image failed to load:', modalImage.src);
          modalImage.style.display = 'none';
          modalImagePlaceholder.classList.remove('d-none');
          modalImagePlaceholder.style.display = 'flex';
        };
        
      } else {
        // Multiple images - use carousel
        console.log('Using carousel for', images.length, 'images');
        singleImageContainer.style.display = 'none';
        projectImageCarousel.classList.remove('d-none');
        
        // Populate carousel
        carouselIndicators.innerHTML = '';
        carouselInner.innerHTML = '';
        
        images.forEach((image, index) => {
          // Create indicator
          const indicator = document.createElement('li');
          indicator.setAttribute('data-target', '#project-image-carousel');
          indicator.setAttribute('data-slide-to', index);
          if (index === 0) {
            indicator.classList.add('active');
          }
          carouselIndicators.appendChild(indicator);
          
          // Create carousel item
          const carouselItem = document.createElement('div');
          carouselItem.classList.add('carousel-item');
          if (index === 0) {
            carouselItem.classList.add('active');
          }
          
          // Create image
          const img = document.createElement('img');
          img.src = image.trim();
          img.alt = `Project Image ${index + 1}`;
          img.classList.add('d-block', 'w-100');
          
          // Add error handling for carousel images
          img.onerror = function() {
            this.onerror = null;
            this.src = '';
            this.alt = 'Image not available';
            this.style.display = 'none';
            
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'd-flex align-items-center justify-content-center h-100';
            placeholder.innerHTML = '<i class="fas fa-image fa-4x opacity-30"></i>';
            carouselItem.appendChild(placeholder);
          };
          
          carouselItem.appendChild(img);
          carouselInner.appendChild(carouselItem);
        });
      }
    }
    
    // Show modal using Bootstrap's modal method
    $(modal).modal('show');
  }
  
  // Initialize modal events when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing modal events');
    
    // Close button event
    document.getElementById('close-modal').addEventListener('click', function() {
      $('#project-modal').modal('hide');
    });
    
    // Add click events to all project cards (use sorted array to maintain order)
    projectCardsArray.forEach(card => {
      card.addEventListener('click', function() {
        openProjectModal(this);
      });
    });
    
    // Handle modal hidden event to re-enable scrolling
    $('#project-modal').on('hidden.bs.modal', function () {
      document.body.style.overflow = '';
    });
    
    // Handle modal shown event to prevent scrolling
    $('#project-modal').on('shown.bs.modal', function () {
      document.body.style.overflow = 'hidden';
    });
  });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Find all card elements
    const cards = document.querySelectorAll('.card');
    
    // Remove the hoverable class to disable the theme's hover effect
    cards.forEach(card => {
      card.classList.remove('hoverable');
      
      // Remove our own hover effect with JavaScript
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'none';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        this.style.transition = 'none';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'none';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      });
    });
  });
</script>
