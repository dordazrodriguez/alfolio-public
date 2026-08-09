---
layout: page
title: "MacroSnap AI: Macros Fitness and Nutrition Platform"
description: "Launched MacroSnap AI for web and iOS/Android. Engineered core feature for instant food logging via photo using CV and LLMs. Includes AI-powered coach, goal tracking, food journal, workout tracking, and meal preps."
category: 
  - 'Web'
  - 'AI'
  - 'DevOps'
  - 'Cloud'
img: assets/img/projects/macrosnap/macrosnap_dashboard.png
tags:
  - Mobile Development
  - iOS
  - Android
  - Computer Vision
  - LLM
  - AI
  - Full Stack
  - Machine Learning
  - GCP
  - AWS
  - Data
live: "https://macrosnap.tectgc.com"
link: "https://macrosnap.tectgc.com"
date: 2025-01-10
show_date: true
importance: 1
featured: true
---

## Links

- Live App: <a href="https://macrosnap.tectgc.com">https://macrosnap.tectgc.com</a>

<div class="text-center">
  <div
    class="screenshot-item"
    data-image="{{ '/assets/img/projects/macrosnap/macrosnap_dashboard.png' | relative_url }}"
    data-caption="MacroSnap AI Dashboard"
  >
    <img
      src="{{ 'assets/img/projects/macrosnap/macrosnap_dashboard.png' | relative_url }}"
      alt="MacroSnap Dashboard"
      class="img-fluid"
    >
  </div>
  <p class="text-muted mt-2" style="font-size: 0.85rem;"><i class="fas fa-search-plus"></i> Click the image to expand</p>
</div>

<style>
  .screenshot-item {
    position: relative;
    display: inline-block;
    max-width: 80%;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .screenshot-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .screenshot-item img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Image Modal Styles */
  #image-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    overflow-y: auto;
    overflow-x: hidden;
  }

  #image-modal.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 1rem;
  }

  .modal-image-container {
    position: relative;
    max-width: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }

  .modal-image-container img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .modal-close {
    position: fixed;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }

  .modal-close:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-caption {
    position: relative;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    text-align: center;
    max-width: 90%;
    margin: 1rem auto;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .modal-close {
      top: 10px;
      right: 15px;
      width: 40px;
      height: 40px;
      font-size: 30px;
    }

    .modal-caption {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }
  }
</style>

<!-- Image Modal -->
<div id="image-modal">
  <span class="modal-close">&times;</span>
  <div class="modal-image-container">
    <img id="modal-image" src="" alt="Screenshot">
  </div>
  <div class="modal-caption" id="modal-caption"></div>
</div>

<script>
  (function () {
    const screenshots = Array.from(document.querySelectorAll('.screenshot-item'));
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.modal-close');

    if (screenshots.length === 0 || !modal || !modalImage || !modalCaption || !closeBtn) {
      return;
    }

    function openModal() {
      const item = screenshots[0];
      modalImage.src = item.getAttribute('data-image');
      modalCaption.textContent = item.getAttribute('data-caption');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    screenshots.forEach(function (item) {
      item.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('active')) {
        return;
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  })();
</script>

## Key Features

- **Instant Food Logging**: Photo-based food recognition using Computer Vision and Multimodal Large Language Models
- **AI-Powered Coach**: Intelligent coaching and recommendations
- **Goal Tracking**: Comprehensive goal setting and progress monitoring
- **Food Journal**: Detailed food logging and nutrition tracking
- **Workout Tracking**: Exercise logging and fitness monitoring
- **Meal Preps**: Meal planning and preparation features
- **Cross-Platform**: Available on both iOS and Android

## Technologies

- Mobile Development (iOS/Android)
- Computer Vision
- Large Language Models (LLMs)
- AI/ML
- Full Stack Development
