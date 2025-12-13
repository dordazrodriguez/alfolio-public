---
layout: page
title: Projects
permalink: /projects-alt/
description: A collection of my projects and work.
nav: false  # Hidden from navigation to avoid duplication with projects2.md
nav_order: 3
display_categories: [work, fun, datascience]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects-container">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="project-category" id="{{ category | slugify }}">
        {{ category | capitalize }}
      </h2>
      
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      
      <div class="projects-grid">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    <!-- Display all projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <div class="projects-grid">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>

<style>
  .projects-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .project-category {
    margin: 2rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--global-divider);
    color: var(--global-theme-color);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
