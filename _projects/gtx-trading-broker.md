---
layout: page
title: "GTX - Combined Crypto Exchange & Multi-Asset Brokerage Platform"
description: "A combined crypto exchange + brokerage-style trading platform (FTX-like exchange plus IBKR-style multi-asset access), with added features for advanced trading, automation, and portfolio workflows."
category:
  - 'Financial'
  - 'Quant'
  - 'Dev'
  - 'Production'
img: assets/img/projects/gtx-trading-broker/gtx-dashboard.png
tags:
  - Alpaca
  - Broker API
  - Python
  - Crypto Exchange
  - Multi-Asset
  - Trading
  - Automation
  - Portfolio Management
  - FastAPI
  - WebSocket
  - REST API
  - OAuth
  - Trading Bot
  - IBKR
  - FTX
  - Full Stack
  - PostgreSQL
  - Docker
  - Financial
  - Risk Management
  - Production
date: 2026-08-04
show_date: true
importance: 1
featured: true
---

A combined crypto exchange + brokerage-style trading platform that pairs an FTX-like order-book exchange experience with IBKR-style multi-asset access, built on the **Alpaca Broker API**. It is designed for traders who want institutional-grade tools - advanced order types, automation, and portfolio workflows - without leaving a single, familiar interface.

## Key Features

- **FTX-like Exchange Experience**: Perpetual-style trading terminals, mark price / funding rate panels, leverage controls, and depth/order-book visualization
- **IBKR-style Multi-Asset Access**: Equities, options, and crypto from one account via the Alpaca Broker API, mirroring Interactive Brokers' professional workstation workflows
- **Advanced Order Management**: Stop-loss, take-profit, trailing stops, bracket orders, and conditional orders with real-time status streaming
- **Trading Automation**: Scriptable strategies, scheduled rebalancing, algorithmic order placement, and paper-to-live promotion
- **Portfolio Workflows**: Consolidated P&L, margin and buying-power tracking, position blotters, and performance analytics
- **Real-time Market Data**: WebSocket streaming for quotes, trades, and account updates
- **Secure Account Onboarding**: OAuth-based brokerage account creation and KYC flow through Alpaca Broker API

## Technology Stack

- **Backend**: Python (FastAPI) with WebSocket support
- **Brokerage**: Alpaca Broker API (trading, market data, and account management)
- **Frontend**: Web-based trading terminal with dark-mode pro dashboard
- **Database**: PostgreSQL for orders, positions, and account state
- **Automation**: Task scheduling and strategy runner services
- **Deployment**: Docker Compose, CI/CD, VPS-ready

## Architecture

```
gtx-trading-broker/
├── api/                 # FastAPI REST + WebSocket endpoints
├── broker/              # Alpaca Broker API integration layer
├── trading/             # Order manager, position manager, strategy engine
├── marketdata/          # Real-time quotes, trades, and account streams
├── portfolio/           # P&L, performance, and portfolio analytics
├── frontend/            # Trading terminal UI
├── scheduler/           # Automation and scheduled workflows
└── tests/               # Unit and integration tests
```

## Screenshots

<div class="project-screenshots-grid" style="margin: 2rem 0;">
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/gtx-dashboard.png' | relative_url }}" data-caption="GTX Trading Terminal - Combined exchange & brokerage dashboard" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/gtx-dashboard.png' | relative_url }}" alt="GTX Trading Terminal" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;">
            <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
          </div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">GTX Trading Terminal</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-01.png' | relative_url }}" data-caption="IBKR-style Multi-Asset Workstation - Equities, options & crypto" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-01.png' | relative_url }}" alt="Multi-Asset Workstation" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">IBKR-style Multi-Asset Workstation</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-02.png' | relative_url }}" data-caption="Order Entry & Advanced Order Types" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-02.png' | relative_url }}" alt="Order Entry" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Order Entry & Advanced Order Types</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-03.png' | relative_url }}" data-caption="Charting & Market Data" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-03.png' | relative_url }}" alt="Charting & Market Data" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Charting & Market Data</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-04.png' | relative_url }}" data-caption="Portfolio Overview & Performance" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-04.png' | relative_url }}" alt="Portfolio Overview" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Portfolio Overview & Performance</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-05.png' | relative_url }}" data-caption="Positions Blotter & P&L" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-05.png' | relative_url }}" alt="Positions Blotter" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Positions Blotter & P&L</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-06.png' | relative_url }}" data-caption="Order History & Trades" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-06.png' | relative_url }}" alt="Order History" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Order History & Trades</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/gtx-trading-broker/ibkr-07.png' | relative_url }}" data-caption="Account Management & Settings" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/gtx-trading-broker/ibkr-07.png' | relative_url }}" alt="Account Management" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Account Management & Settings</p>
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
    <span id="current-image-index">1</span> / <span id="total-images-count">8</span>
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

## Roadmap

- [ ] Alpaca Broker API integration for account onboarding, trading, and market data
- [ ] Exchange-style trading terminal with order book and advanced order types
- [ ] Multi-asset support: equities, options, and crypto in a unified workspace
- [ ] Automation engine: strategy runners, scheduled rebalancing, and paper-to-live promotion
- [ ] Portfolio analytics: P&L, risk metrics, and performance reporting
- [ ] WebSocket streaming for real-time quotes, trades, and account updates
