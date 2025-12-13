---
layout: page
title: "Live TV and Movie Streaming Application"
description: "Cross-platform application built with Flutter for streaming on-demand movies and live TV channels through HLS/HTTP links loaded from M3U8 files."
category: 
  - 'Dev'
  - 'Web'
  - 'DevOps'
  - 'Cybersecurity'
img: assets/img/projects/iptv/mobile.png
tags:
  - Flutter
  - Dart
  - SQL
  - NoSQL
  - Mobile Development
  - Desktop
  - Full Stack
link: "https://github.com/dordazrodriguez/IPTV-and-Movie-App"
importance: 1
---

<div class="row">
  <div class="col-sm-8">
    <p class="lead">A feature-rich cross-platform streaming application that brings together live TV channels and on-demand movies in a single, intuitive interface. Uses TMDB API to retrieve movie information and supports both AWS and Firebase backend implementations.</p>
    
    <div class="project-links mt-4">
      <a href="https://github.com/dordazrodriguez/IPTV-and-Movie-App" class="btn btn-primary mr-2 mb-2" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> View on GitHub
      </a>
    </div>
  </div>
  <div class="col-sm-4">
  </div>
</div>

## Features

- **Cross-Platform**: Built with Flutter for seamless performance on both mobile and desktop (including Android TV)
- **Live TV Streaming**: Watch your favorite TV channels by loading .m3u8 files containing HLS/HTTP/HTTPS links
- **On-Demand Movies & TV Shows**: Browse and stream movies and TV series with TMDB API integration
- **Smart Link Scraping**: Automatically searches and retrieves streaming links for selected content
- **Remote Control Support**: Designed for Android TV devices with remote control navigation
- **Dual Backend Support**: Available in both AWS and Firebase backend versions

## How It Works

### On-Demand Movie and TV Show Section
The on-demand section is split into TV Series and Movies which loads an initial grid of content depending on user selection. Users can search for Movies or TV Series, and the app fetches data from "The Movie Database" (TMDB) API to return matching results. Once a movie/show is selected, it brings users to a detail page with a play button that scrapes the internet for existing streaming links matching the movie ID from different sites, allowing users to select and play their desired link.

### Live TV Channels Section
The live TV Channel section allows users to watch live TV channels by loading .m3u8 file(s) specified in the settings. These files contain a list of HLS/HTTP/HTTPS links. The app displays the channel name on the left and the stream of the chosen channel link in a container to the right, with streaming links abstracted from the user.

## Technical Details

- **Frontend**: Flutter with Material Design
- **State Management**: Provider pattern for efficient state management
- **Database**: Local SQLite and NoSQL solutions for offline functionality
- **Video Playback**: Custom video player with HLS/HTTP streaming support
- **API Integration**: TMDB API for movie/TV show metadata and images
- **Backend Options**: AWS or Firebase backend implementations
- **Responsive Design**: Adapts to different screen sizes and orientations, optimized for Android TV

## Screenshots

<div class="row mt-4">
  <div class="col-12 mb-4">
    <div class="text-center">
      <img src="https://raw.githubusercontent.com/dordazrodriguez/IPTV-and-Movie-App/main/Assets/tv.png" alt="TV Interface" class="img-fluid rounded shadow mx-auto d-block">
      <p class="text-muted mt-2">Mobile Interface</p>
    </div>
  </div>
</div>

## Demo Video

<div class="row mt-4">
  <div class="col-12 mb-4">
    <div class="text-center">
      <video src="https://raw.githubusercontent.com/dordazrodriguez/IPTV-and-Movie-App/main/Assets/Screen_Recording_Compressed.mp4" controls="controls" class="img-fluid rounded shadow" style="max-width: 100%;">
        Your browser does not support the video tag.
      </video>
      <p class="text-muted mt-2"><strong>Note:</strong> App may seem sluggish due to it running on an emulated Android TV device in the screen recording above. App was also designed to be able to use a remote instead of cursor for use on actual Android TV devices.</p>
    </div>
  </div>
</div>

<div class="row mt-4">
  <div class="col-12 mb-4">
    <div class="text-center">
      <img src="https://github.com/dordazrodriguez/IPTV-and-Movie-App/assets/79417457/d3fa1633-e1ac-4d77-8e4d-454ae7d89a38" alt="App Demo" class="img-fluid rounded shadow mx-auto d-block" style="max-width: 100%;">
    </div>
  </div>
</div>

## Getting Started

### Prerequisites
- Flutter SDK (latest stable version)
- Android Studio / Xcode (for mobile development)
- VS Code (recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dordazrodriguez/IPTV-and-Movie-App.git
   cd IPTV-and-Movie-App
   ```
2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Run the app:
   ```bash
   flutter run
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dordazrodriguez/IPTV-and-Movie-App/blob/main/LICENSE) file for details.
