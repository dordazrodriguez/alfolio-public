---
layout: page
title: "React/Tailwind Dev Portfolio Site"
description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS featuring dark/light mode, responsive design, and interactive project filtering."
img: assets/img/proj9image.png
category: web
importance: 3
tags:
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
link: "https://github.com/yourusername/portfolio-site"
---

<style>
  .body {
    max-width: 85vh !important;
    font-size: 1.5em !important;
  }

  .post {
    max-width: 950px;
    margin: 0 auto;
  }
  
  .post img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    .post-content {
      max-width: 95%;
    }
  }
</style>

{% include figure.liquid path="assets/img/proj9image.png" class="img-fluid rounded z-depth-1" %}

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between themes based on your preference
- **Interactive Project Filtering**: Easily filter projects by category or technology
- **Modern UI**: Clean, minimalist design with smooth animations
- **Performance Optimized**: Fast loading times and smooth interactions

## Technologies Used

- **React**: For building the component-based UI
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For rapid styling and consistent design
- **Framer Motion**: For smooth animations and transitions

## Development Process

I designed this portfolio to be both visually appealing and functional. The project filtering system allows visitors to quickly find projects that interest them by category or technology stack.

The site is fully responsive and includes accessibility features to ensure it's usable by everyone. Performance optimization was a key focus, with lazy-loaded images and code splitting to ensure fast loading times.
