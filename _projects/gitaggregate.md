---
layout: page
title: "GitAggregate - Multi-Account Git Repository Manager GUI"
description: "A cross-platform application for managing multiple Git accounts (GitHub, GitLab, Gitea) from a single unified interface. Features React/TypeScript desktop app with Tauri, Flutter mobile app, and comprehensive repository management capabilities."
category: 
  - 'Dev'
  - 'Web'
  - 'DevOps'
img: assets/img/projects/gitaggregate/screenshot-dashboard.png
tags:
  - Rust
  - React
  - TypeScript
  - Tauri
  - Flutter
  - Dart
  - Zustand
  - Tailwind CSS
  - GitHub API
  - GitLab API
  - Gitea API
  - Cross-Platform
  - Desktop App
  - Mobile App
  - Git Management
  - Repository Management
  - OAuth
  - State Management
link: "https://github.com/dordazrodriguez/GitAggregate"
date: 2024-11-01
show_date: true
importance: 1
---

<!-- A comprehensive cross-platform application that unifies multiple Git hosting services (GitHub, GitLab, Gitea) into a single, powerful interface for managing repositories across all your accounts. -->

## Screenshots

<div class="project-screenshots-gallery" style="margin: 2rem 0;">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="screenshot-thumbnail" data-image="{{ '/assets/img/projects/gitaggregate/screenshot-dashboard.png' | relative_url }}" data-caption="GitAggregate Main Dashboard - Unified view of all repositories across multiple Git providers" style="cursor: pointer; position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <img src="{{ '/assets/img/projects/gitaggregate/screenshot-dashboard.png' | relative_url }}" alt="Main Dashboard" class="img-fluid" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
        <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
          <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
        </div>
      </div>
      <p class="text-center mt-2" style="font-size: 0.9rem; color: #666;">Main Dashboard</p>
    </div>
    <div class="col-md-4 mb-3">
      <div class="screenshot-thumbnail" data-image="{{ '/assets/img/projects/gitaggregate/screenshot-repository-management.png' | relative_url }}" data-caption="Repository Management View - Detailed repository information and actions" style="cursor: pointer; position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <img src="{{ '/assets/img/projects/gitaggregate/screenshot-repository-management.png' | relative_url }}" alt="Repository Management" class="img-fluid" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
        <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
          <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
        </div>
      </div>
      <p class="text-center mt-2" style="font-size: 0.9rem; color: #666;">Main Dashboard Dark / System Theme</p>
    </div>
    <div class="col-md-4 mb-3">
      <div class="screenshot-thumbnail" data-image="{{ '/assets/img/projects/gitaggregate/screenshot-account-management.png' | relative_url }}" data-caption="Account Management Interface - Add and manage multiple Git provider accounts" style="cursor: pointer; position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <img src="{{ '/assets/img/projects/gitaggregate/screenshot-account-management.png' | relative_url }}" alt="Account Management" class="img-fluid" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
        <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
          <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
        </div>
      </div>
      <p class="text-center mt-2" style="font-size: 0.9rem; color: #666;">Account Management</p>
    </div>
  </div>
</div>

<style>
  .screenshot-thumbnail:hover img {
    transform: scale(1.05);
  }
  .screenshot-thumbnail:hover .screenshot-overlay {
    opacity: 1;
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
    overflow: hidden;
  }
  
  #image-modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-image-container {
    position: relative;
    max-width: 95%;
    max-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-image-container img {
    max-width: 100%;
    max-height: 95vh;
    object-fit: contain;
    border-radius: 8px;
  }
  
  .modal-close {
    position: absolute;
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
  
  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 30px;
    cursor: pointer;
    background: rgba(0,0,0,0.5);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    z-index: 10000;
  }
  
  .modal-nav:hover {
    background: rgba(0,0,0,0.8);
  }
  
  .modal-nav.prev {
    left: 30px;
  }
  
  .modal-nav.next {
    right: 30px;
  }
  
  .modal-caption {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: rgba(0,0,0,0.7);
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    max-width: 80%;
  }
  
  .modal-counter {
    position: absolute;
    top: 20px;
    left: 30px;
    color: white;
    background: rgba(0,0,0,0.5);
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
  }
</style>

<!-- Image Modal -->
<div id="image-modal">
  <span class="modal-close">&times;</span>
  <div class="modal-counter">
    <span id="current-image">1</span> / <span id="total-images">3</span>
  </div>
  <div class="modal-nav prev">
    <i class="fas fa-chevron-left"></i>
  </div>
  <div class="modal-nav next">
    <i class="fas fa-chevron-right"></i>
  </div>
  <div class="modal-image-container">
    <img id="modal-image" src="" alt="Screenshot">
  </div>
  <div class="modal-caption" id="modal-caption"></div>
</div>

<script>
(function() {
  const screenshots = [
    {
      image: "{{ '/assets/img/projects/gitaggregate/screenshot-dashboard.png' | relative_url }}",
      caption: "GitAggregate Main Dashboard - Unified view of all repositories across multiple Git providers"
    },
    {
      image: "{{ '/assets/img/projects/gitaggregate/screenshot-repository-management.png' | relative_url }}",
      caption: "Repository Management View - Detailed repository information and actions"
    },
    {
      image: "{{ '/assets/img/projects/gitaggregate/screenshot-account-management.png' | relative_url }}",
      caption: "Account Management Interface - Add and manage multiple Git provider accounts"
    }
  ];
  
  let currentIndex = 0;
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const currentImageSpan = document.getElementById('current-image');
  const totalImagesSpan = document.getElementById('total-images');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-nav.prev');
  const nextBtn = document.querySelector('.modal-nav.next');
  
  totalImagesSpan.textContent = screenshots.length;
  
  function openModal(index) {
    currentIndex = index;
    updateModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function updateModal() {
    const current = screenshots[currentIndex];
    modalImage.src = current.image;
    modalCaption.textContent = current.caption;
    currentImageSpan.textContent = currentIndex + 1;
  }
  
  function showNext() {
    currentIndex = (currentIndex + 1) % screenshots.length;
    updateModal();
  }
  
  function showPrev() {
    currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    updateModal();
  }
  
  // Add click handlers to thumbnails
  document.querySelectorAll('.screenshot-thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', () => openModal(index));
  });
  
  // Modal controls
  closeBtn.addEventListener('click', closeModal);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });
})();
</script>

## Overview

GitAggregate solves the problem of managing repositories across multiple Git hosting platforms. Whether you have personal GitHub accounts, work GitLab instances, or self-hosted Gitea servers, GitAggregate provides a unified dashboard to manage them all from one place.

## Key Features

### Multi-Account Support
- **Multiple Providers**: Connect accounts from GitHub, GitLab, and Gitea simultaneously
- **Account Labeling**: Organize accounts with custom labels (e.g., "Work GitHub", "Personal GitLab")
- **Secure Token Management**: Encrypted storage of personal access tokens
- **OAuth Integration**: Streamlined authentication flow for all providers
- **Self-Hosted Support**: Connect to custom GitLab and Gitea instances

### Unified Repository View
- **Centralized Dashboard**: View all repositories from all connected accounts in one place
- **Cross-Provider Search**: Search across all repositories regardless of provider
- **Advanced Filtering**: Filter by provider, account, visibility, or language
- **Repository Statistics**: View stars, forks, issues, and activity across all repos
- **Favorites System**: Mark and quickly access favorite repositories

### Full Repository Management
- **Repository Details**: Comprehensive view of repository information
- **Branch Management**: View and manage branches across all repositories
- **Commit History**: Browse commit history and view diffs
- **Pull/Merge Requests**: Manage pull requests (GitHub) and merge requests (GitLab/Gitea)
- **Repository Actions**: Star/unstar, clone, create, and delete repositories
- **Activity Tracking**: Monitor repository activity and updates

### User Experience
- **Onboarding Flow**: Guided setup for first-time users
- **Keyboard Shortcuts**: Power user keyboard navigation
- **Theme Support**: Light and dark mode with system preference detection
- **Responsive Design**: Optimized for desktop and mobile interfaces
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages

## Technology Stack

### Desktop Application
- **Frontend Framework**: React 18 with TypeScript
- **Desktop Framework**: Tauri (Rust-based, lightweight alternative to Electron)
- **State Management**: Zustand for efficient state management
- **UI Framework**: Tailwind CSS with custom component library
- **API Clients**: 
  - Octokit for GitHub API
  - Axios for GitLab and Gitea APIs
- **Build Tool**: Vite for fast development and optimized builds

### Mobile Application
- **Framework**: Flutter with Dart
- **State Management**: Provider pattern
- **Architecture**: Clean architecture with service layer
- **Cross-Platform**: iOS and Android support

### Marketing Website
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Components**: Hero, Features, Pricing, Testimonials, CTA sections

## Architecture

### Desktop App Structure
```
src/
├── components/          # React components
│   ├── AccountManager/ # Account management UI
│   ├── Dashboard/     # Main dashboard
│   ├── RepositoryList/# Repository listing
│   ├── RepositoryCard/# Repository card component
│   ├── RepositoryDetails/ # Detailed repository view
│   ├── Settings/      # Application settings
│   ├── Subscription/  # Subscription management
│   └── ui/           # Reusable UI components
├── services/         # API service clients
│   ├── github.ts     # GitHub API client
│   ├── gitlab.ts     # GitLab API client
│   ├── gitea.ts      # Gitea API client
│   └── gitService.ts # Unified Git service
├── stores/           # Zustand stores
│   ├── accountStore.ts
│   ├── repositoryStore.ts
│   ├── subscriptionStore.ts
│   └── themeStore.ts
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

### Mobile App Structure
```
lib/
├── models/           # Data models
├── services/         # API service clients
├── providers/        # State management
├── screens/          # Screen components
├── widgets/          # Reusable widgets
└── utils/            # Utility functions
```

## Features in Detail

### Account Management
- **Quick Account Addition**: One-click navigation to token generation pages
- **Token Format Validation**: Real-time validation as you type
- **Required Scopes Display**: Clear indication of required permissions
- **Account Removal**: Easy account management with confirmation dialogs
- **Account Organization**: Label and organize multiple accounts

### Repository Operations
- **Unified Search**: Search across all repositories simultaneously
- **Provider Filtering**: Filter by GitHub, GitLab, or Gitea
- **Account Filtering**: View repositories from specific accounts
- **Repository Actions**: 
  - Clone repositories
  - Create new repositories
  - Delete repositories
  - Star/unstar repositories
  - View detailed information

### Security
- **Encrypted Storage**: Personal access tokens encrypted before storage
- **Local Storage**: All data stored locally, never sent to external servers
- **Secure Authentication**: OAuth flow for secure account connection
- **Token Validation**: Automatic validation of token format and permissions

## Development

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Rust (for Tauri desktop build)
- Flutter SDK (for mobile app)

### Running the Desktop App
```bash
# Install dependencies
npm install

# Development mode (web)
npm run dev

# Development mode (desktop with Tauri)
npm run tauri:dev

# Build for production
npm run build
npm run tauri:build
```

### Running the Mobile App
```bash
cd flutter
flutter pub get
flutter run
```

### Running the Website
```bash
cd website
npm install
npm run dev
```

## API Integration

### GitHub API
- Uses Octokit library for GitHub API interactions
- Supports all GitHub repository operations
- Token format: `ghp_` or `github_pat_`
- Required scopes: `repo` (full control)

### GitLab API
- Custom Axios-based client
- Supports self-hosted GitLab instances
- Token format: `glpat-`
- Required scopes: `api`, `read_repository`, `write_repository`

### Gitea API
- Custom Axios-based client
- Supports self-hosted Gitea instances
- Base URL configuration required
- Required scopes: `read:repository`, `write:repository`

## Future Roadmap

### MegaGit - Native Git Hosting
Planned native Git hosting platform integrated into GitAggregate:
- Full Git server capabilities (HTTP/SSH)
- Repository storage and management
- Issues, Pull Requests, Code Review
- CI/CD integration
- Project management tools
- Analytics and insights

## Use Cases

- **Developers with Multiple Accounts**: Manage personal and work repositories in one place
- **Teams Using Multiple Platforms**: Unified view across GitHub, GitLab, and Gitea
- **Self-Hosted Git Users**: Connect to custom GitLab and Gitea instances
- **Repository Discovery**: Search and discover repositories across all accounts
- **Cross-Platform Management**: Manage repositories from desktop or mobile

## Skills Demonstrated

- **Cross-Platform Development**: Tauri desktop app and Flutter mobile app
- **Modern Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand for efficient state handling
- **API Integration**: Multiple REST API clients (GitHub, GitLab, Gitea)
- **Security**: Encrypted token storage and secure authentication
- **UI/UX Design**: Intuitive interface with onboarding and error handling
- **Build Tools**: Vite for fast development and optimized builds
- **Type Safety**: Comprehensive TypeScript type definitions
- **Mobile Development**: Flutter cross-platform mobile app

## Links

- GitHub Repository: [GitAggregate](https://github.com/dordazrodriguez/GitAggregate)
