---
layout: page
title: "ConnectFlow"
description: "A modern UCaaS platform that unifies voice calling, business SMS, team chat, HD video meetings, and AI transcription in one secure, cloud-native platform."
category:
  - 'Full Stack'
  - 'Dev'
  - 'Production'
img: assets/img/projects/connectflow/thumbnail.png
additional_images:
  - assets/img/projects/connectflow/hero-dashboard.png
  - assets/img/projects/connectflow/homepage.png
  - assets/img/projects/connectflow/blog.png
tags:
  - Full Stack
  - UCaaS
  - React
  - TypeScript
  - VoIP
  - WebRTC
  - AI
  - SMS
  - Video
  - Cloud
  - SaaS
  - Communication
  - Telecom
  - Production
link: "https://connectflow.gen-cloud.org"
importance: 2
date: 2026-08-09
show_date: true
---

ConnectFlow is a modern **Unified Communications as a Service (UCaaS)** platform that brings voice, SMS, video, and AI-powered intelligence into one secure, cloud-native workspace. It is designed to replace legacy PBX systems with a scalable, software-first communication stack for distributed teams.

## Key Features

- **Voice & Calling**: Crystal-clear VoIP calling with WebRTC, call routing, IVR menus, and ring groups
- **Business SMS**: Two-way SMS/MMS messaging with templates, auto-replies, and AI suggestions
- **Team Chat**: Internal channels, direct messages, file sharing, and emoji reactions
- **HD Video Meetings**: Instant or scheduled meetings with screen sharing, recording, and participant management
- **AI Transcription & Summaries**: Real-time call transcription, AI summaries, sentiment analysis, and action items
- **CRM Integrations**: Connect Salesforce, HubSpot, Clio, and Athenahealth for automatic activity logging
- **Secure Cloud-Native Architecture**: SOC 2, HIPAA, and GDPR ready with encryption and role-based access
- **Resources & Insights**: Built-in blog and guides covering AI automation, number porting, remote work, UCaaS vs PBX, SMS marketing, and more

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Real-Time Communication**: WebRTC for voice and video
- **AI / ML**: Real-time transcription, sentiment analysis, and summarization
- **Cloud**: Cloud-hosted, containerized microservices
- **Integrations**: Salesforce, HubSpot, Clio, Athenahealth

## Live Demo

Visit the live application: **[https://connectflow.gen-cloud.org](https://connectflow.gen-cloud.org)**

## Screenshots

<div class="project-screenshots-grid" style="margin: 2rem 0;">
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/connectflow/homepage.png' | relative_url }}" data-caption="ConnectFlow homepage — modern UCaaS platform" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/connectflow/homepage.png' | relative_url }}" alt="ConnectFlow Homepage" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;">
            <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
          </div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Homepage — UCaaS Platform</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/connectflow/blog.png' | relative_url }}" data-caption="ConnectFlow blog — resources and insights" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/connectflow/blog.png' | relative_url }}" alt="ConnectFlow Blog" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Resources & Insights Blog</p>
      </div>
    </div>
  </div>
</div>

<style>
  .screenshot-item {
    position: relative;
  }
  
  .screenshot-item img {
    height: 320px !important;
    object-fit: cover;
    object-position: top;
  }
  
  .screenshot-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
  }
  
  .screenshot-item:hover .screenshot-overlay {
    opacity: 1;
  }
  
  html[data-theme='dark'] .screenshot-item p {
    color: #cbd5e1;
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
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
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
    background: rgba(0,0,0,0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }
  
  .modal-close:hover {
    background: rgba(0,0,0,0.8);
  }
  
  .modal-nav-arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10000;
    background: rgba(0,0,0,0.5);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s, transform 0.2s;
    user-select: none;
  }
  
  .modal-nav-arrow:hover {
    background: rgba(0,0,0,0.8);
    transform: translateY(-50%) scale(1.1);
  }
  
  .modal-nav-arrow:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  .modal-nav-arrow.prev {
    left: 30px;
  }
  
  .modal-nav-arrow.next {
    right: 30px;
  }
  
  .modal-nav-arrow.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  .modal-caption {
    position: relative;
    color: white;
    background: rgba(0,0,0,0.7);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    text-align: center;
    max-width: 90%;
    margin: 1rem auto;
    font-size: 1rem;
  }
  
  .modal-counter {
    position: fixed;
    top: 20px;
    left: 30px;
    color: white;
    background: rgba(0,0,0,0.5);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    z-index: 10000;
  }
  
  @media (max-width: 768px) {
    .modal-image-container {
      padding: 0.5rem;
    }
    
    .modal-close {
      top: 10px;
      right: 15px;
      width: 40px;
      height: 40px;
      font-size: 30px;
    }
    
    .modal-nav-arrow {
      width: 50px;
      height: 50px;
      font-size: 30px;
    }
    
    .modal-nav-arrow.prev {
      left: 10px;
    }
    
    .modal-nav-arrow.next {
      right: 10px;
    }
    
    .modal-counter {
      top: 10px;
      left: 15px;
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
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
  <div class="modal-counter">
    <span id="current-image-index">1</span> / <span id="total-images-count">2</span>
  </div>
  <div class="modal-nav-arrow prev" id="modal-prev">
    <i class="fas fa-chevron-left"></i>
  </div>
  <div class="modal-nav-arrow next" id="modal-next">
    <i class="fas fa-chevron-right"></i>
  </div>
  <div class="modal-image-container">
    <img id="modal-image" src="" alt="Screenshot">
  </div>
  <div class="modal-caption" id="modal-caption"></div>
</div>

<script>
(function() {
  const screenshots = Array.from(document.querySelectorAll('.screenshot-item'));
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  const currentIndexSpan = document.getElementById('current-image-index');
  const totalImagesSpan = document.getElementById('total-images-count');
  
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;
  
  totalImagesSpan.textContent = screenshots.length;
  
  function getImageData(index) {
    const item = screenshots[index];
    return {
      url: item.getAttribute('data-image'),
      caption: item.getAttribute('data-caption')
    };
  }
  
  function updateModal(index) {
    const data = getImageData(index);
    modalImage.src = data.url;
    modalCaption.textContent = data.caption;
    currentIndexSpan.textContent = index + 1;
    
    if (prevBtn) {
      prevBtn.classList.toggle('disabled', index === 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle('disabled', index === screenshots.length - 1);
    }
  }
  
  function openModal(index) {
    currentIndex = index;
    updateModal(currentIndex);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function showNext() {
    if (currentIndex < screenshots.length - 1) {
      currentIndex++;
      updateModal(currentIndex);
    }
  }
  
  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateModal(currentIndex);
    }
  }
  
  screenshots.forEach((item, index) => {
    item.addEventListener('click', function() {
      openModal(index);
    });
  });
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPrev();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showNext();
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      showNext();
    }
  });
  
  const modalImageContainer = document.querySelector('.modal-image-container');
  
  if (modalImageContainer) {
    modalImageContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    modalImageContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
    
    touchStartX = 0;
    touchEndX = 0;
  }
})();
</script>

## Project Overview

ConnectFlow demonstrates end-to-end full-stack SaaS development: a polished React + TypeScript frontend, cloud-hosted backend services, WebRTC-powered real-time communication, AI integration for transcription and summarization, and third-party CRM integrations. It is built to be extensible, allowing new carriers, AI models, and enterprise integrations to be added over time.
