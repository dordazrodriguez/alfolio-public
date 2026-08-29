---
layout: page
title: "Automated SaaS Idea R&D System — Autonomous Venture Lab"
description: "An autonomous market intelligence and venture R&D system that continuously mines Reddit, Hacker News, GitHub, RSS and the web for evidence of problems, clusters them, dispatches a 7-agent research swarm, and produces scored, testable SaaS opportunity reports with Markdown documentation."
category:
  - 'AI'
  - 'ML'
  - 'Full Stack'
  - 'Production'
  - 'Data Science'
  - 'DevOps'
img: assets/img/projects/automated-rnd-system/thumbnail.png
additional_images:
  - assets/img/projects/automated-rnd-system/dashboard-overview.png
  - assets/img/projects/automated-rnd-system/opportunities-ranked.png
  - assets/img/projects/automated-rnd-system/opportunity-detail-invoice-agent.png
  - assets/img/projects/automated-rnd-system/opportunity-detail-bookkeeping.png
  - assets/img/projects/automated-rnd-system/problem-clusters.png
tags:
  - Python
  - FastAPI
  - Next.js
  - LangGraph
  - LiteLLM
  - Ollama
  - OpenAI
  - Gemini
  - OpenRouter
  - PostgreSQL
  - pgvector
  - Redis
  - Celery
  - Docker
  - Autonomous Agents
  - Market Intelligence
  - SaaS
  - Venture R&D
  - Embeddings
  - Agglomerative Clustering
  - Full Stack
  - Production
  - DevOps
  - AI
  - Automation
importance: 1
featured: true
date: 2026-08-29
show_date: true
---

<div class="rnds-hero" style="margin: 0.5rem 0 1.2rem; padding: 1.4rem 1.6rem; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); background: linear-gradient(135deg, rgba(56,189,248,0.08), rgba(14,165,233,0.06));">
  <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.85rem;">
    <span style="font-size:0.75rem; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; padding:0.3rem 0.6rem; border-radius:999px; background:rgba(2,132,199,0.12); border:1px solid rgba(2,132,199,0.2); color:#0369a1;">Autonomous</span>
    <span style="font-size:0.75rem; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; padding:0.3rem 0.6rem; border-radius:999px; background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.2); color:#047857;">VPS-First</span>
    <span style="font-size:0.75rem; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; padding:0.3rem 0.6rem; border-radius:999px; background:rgba(168,85,247,0.12); border:1px solid rgba(168,85,247,0.2); color:#7e22ce;">Zero-Cost Ollama Option</span>
    <span style="font-size:0.75rem; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; padding:0.3rem 0.6rem; border-radius:999px; background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.2); color:#b45309;">Production-Grade</span>
  </div>
  <!-- ONE CLEAR LINE — the 10-second takeaway -->
  <p style="font-size:1.55rem; line-height:1.25; margin:0; font-weight:800; letter-spacing:-0.02em; text-align:center; color:#0f172a;">
    A 24/7 autonomous engine that finds, vets, and ranks profitable SaaS ideas.
  </p>
  <p style="font-size:1.02rem; line-height:1.6; margin:0.85rem 0 0; font-weight:500; color:#334155; text-align:center;">
    An autonomous <strong>SaaS Idea R&D Lab</strong> cycling <strong>Signals → Problems → Clusters → Research → Scoring → Reports</strong> without human prompts. Every cycle delivers the <em>5 strongest evidence-backed opportunities</em> with ICP, competitors, TAM proxy, pricing, and the cheapest 7-day validation test.
  </p>
  <div style="margin-top:1rem; padding:0.85rem 1rem; border-left:4px solid #0ea5e9; background:rgba(255,255,255,0.7); border-radius:0 8px 8px 0; font-style:italic; color:#334155; font-size:0.95rem;">
    “Here are the 5 strongest opportunities I found this week, with receipts — who will pay, what they pay today, what’s missing, and how we test it in 7 days without writing production code.”
  </div>
</div>

> **TL;DR for reviewers:** Production-grade, full-stack AI system (FastAPI + LangGraph + pgvector + Redis/Celery + Next.js) that **automates the entire venture research funnel** — from raw web signals to ranked, testable business cases — with cost-aware LLM routing, pgvector semantic clustering, and human-in-the-loop dashboard controls. Built to run for **months unattended**, compound evidence, and **de-risk building** by forcing a 7-agent red-team before any code.

**At a glance**

| | |
|---|---|
| **What it does** | Mines Reddit/HN/GitHub/RSS/web, extracts & clusters problems, runs 7-agent research (Market, Competitor, Customer, Pricing, Technical, Business Model, Red Team), scores 0–100, emits Markdown reports |
| **Stack** | Python 3.12 + FastAPI, LangGraph, LiteLLM (Ollama/OpenRouter/Gemini/OpenAI), PostgreSQL 16 + pgvector, Redis + Celery Beat, Next.js 15 + Tailwind + shadcn/ui |
| **Deploy** | Docker Compose (VPS-first) + Terraform for DigitalOcean / AWS ECS + RDS + ElastiCache; one-command `docker compose up` |
| **Cost** | 3-tier routing (Cheap/Medium/Strong), per-agent spend tracking, `RND_MONTHLY_BUDGET_LIMIT` alerts, **$0 mode via local Ollama** |
| **Control** | Dashboard Pipeline Controls (Full Cycle/Collect/Classify/Extract/Cluster/Research), Live Tasks, `POST /api/orchestrate`, exports (.md/.json/.csv) |

<style>
  html[data-theme='dark'] .rnds-hero { background: linear-gradient(135deg, rgba(56,189,248,0.12), rgba(14,165,233,0.08)) !important; border-color: rgba(255,255,255,0.12) !important; }
  html[data-theme='dark'] .rnds-hero div[style*="background:rgba(255,255,255,0.7)"] { background: rgba(15,23,42,0.6) !important; color: #cbd5e1 !important; }
  html[data-theme='dark'] .rnds-hero p[style*="color:#0f172a"] { color: #f1f5f9 !important; }
  html[data-theme='dark'] .rnds-hero p[style*="color:#334155"] { color: #cbd5e1 !important; }
</style>

## Business Value

- **Never run out of pipeline**: 24/7 signal mining from Reddit, Hacker News, GitHub, RSS feeds, web search, app-store reviews, Product Hunt, G2, job postings, and government data.
- **Evidence over vibes**: every opportunity is backed by scored signals, clustered problem evidence count, confidence, and testable hypotheses — not just LLM hallucinations.
- **De-risk before building**: 7-agent research swarm tries to *disprove* the hypothesis (TAM, competitor gap, pricing, technical feasibility, red-team).
- **Cheapest validation first**: each report includes testable hypotheses and MVP speed (weeks) so you can run a 1-week landing-page or concierge experiment before writing code.
- **Cost controlled**: 3-tier LLM routing (Cheap/Medium/Strong), per-agent spend tracking, monthly budget alerts, and Ollama local fallback for zero API cost.

## Architecture Overview

```
Data Sources (Reddit / HN / GitHub / RSS / Web Search / App Stores / G2 / Jobs)
        │
        ▼
Signal Collector ──► Signal Collector (scrapers / APIs / RSS / crawling)
        │
        ▼
Signal Processor (dedupe → classify → extract problem / industry / sentiment / trend)
        │
        ▼
R&D Agent Swarm (7 specialized agents, LangGraph-orchestrated)
  ├─ Market Researcher (TAM/SAM/SOM, growth)
  ├─ Competitor Analyst (pricing, features, gaps)
  ├─ Customer Researcher (ICP, willingness to pay)
  ├─ Pricing Analyst (models, tiers, comparables)
  ├─ Technical Analyst (feasibility, MVP timeline)
  ├─ Business Model Agent (revenue models)
  └─ Red Team Agent (adversarial / failure modes)
        │
        ▼
Opportunity Database (Problems / Clusters / Evidence / Markets / Competitors / Ideas)
        │
        ▼
Opportunity Scorer (weighted 8-factor scoring + ranking)
        │
        ▼
Report Synthesizer (Markdown report + change detection, export .md / .json / CSV)
        │
        ▼
Dashboard (Next.js 15 + Tailwind + shadcn/ui) + Monitoring (Celery / Redis / Costs)
```

## System Pipeline (Celery Beat — fully autonomous)

| Stage | Schedule | What it does |
|---|---|---|
| **Signal Collection** | every 1h | Mines Reddit, HN, GitHub, RSS, web search for problem indicators |
| **Signal Classification** | every 30m | LLM categorizes by industry, sentiment, relevance (Cheap tier) |
| **Problem Extraction** | every 6h | LLM extracts structured problems from classified signals |
| **Problem Clustering** | every 24h | Embeddings + agglomerative clustering groups related problems |
| **Research Swarm** | every 24h | 7 agents research top problem clusters in parallel |
| **Scoring & Reports** | every 1h | Weighted scorer + Markdown report generation with change detection |
| **Cost Monitoring** | every 6h | Tracks LLM spend per agent/model/day with budget alerts |

Manual override is available via **Pipeline Control** buttons (Full Cycle, Collect, Classify, Extract, Cluster, Research) and `POST /api/orchestrate`.

## Research Swarm — 7 Specialized Agents

All agents share a `base_agent.py` harness with LiteLLM gateway and 3-tier model routing:

- **Market Researcher** — TAM/SAM/SOM estimates, CAGR, market growth, regulatory drivers
- **Competitor Analyst** — existing players, pricing tiers, feature matrices, gap analysis
- **Customer Researcher** — ICP definition, willingness-to-pay, JTBD, urgency scoring
- **Pricing Analyst** — pricing models (per-seat, usage, tiered), comparables, ARPU estimate
- **Technical Analyst** — architecture sketch, feasibility score, MVP build timeline (weeks), risk
- **Business Model Agent** — revenue model, CAC/LTV proxy, distribution channel, moat
- **Red Team Agent** — adversarial review: why this will fail, hidden costs, compliance, defensibility

Each agent produces structured output consumed by the **Opportunity Synthesizer** which emits a ranked opportunity with confidence, evidence count, ARPU, competition level, MVP weeks, and status.

## Scoring Engine (8 factors)

Every opportunity is scored 0–10 on:

`Problem Severity | Willingness to Pay | Market Size | Growth | Competition Gap | Distribution | Technical Feasibility | MVP Speed`

The weighted aggregate is normalized to 0–100 for ranking (see screenshots: 71 → 48 in table, 62.4 / 50.6 in detail views), with delta vs. prior cycle and confidence %. Change detection highlights mover scores.

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.12 + FastAPI + Pydantic v2 |
| Agent Orchestration | LangGraph |
| LLM Gateway | LiteLLM (Ollama local, OpenRouter, Gemini, OpenAI) — 3 tiers: Cheap / Medium / Strong |
| Database | PostgreSQL 16 + pgvector (embeddings & similarity search) |
| Queue & Scheduling | Redis + Celery + Celery Beat |
| Frontend | Next.js 15 + Tailwind CSS + shadcn/ui + lucide-react |
| Deployment | Docker Compose (VPS-first), Terraform for DigitalOcean & AWS (ECS Fargate + RDS + ElastiCache) |
| Observability | Cost monitoring per agent/model/day, Live Tasks tracker, signal/problem stats |

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/dashboard` | Dashboard stats + top opportunities |
| `GET` | `/api/opportunities` | List scored opportunities (filter by industry/status/rec/competition/MVP/score) |
| `GET` | `/api/opportunities/{slug}` | Opportunity detail + score breakdown |
| `GET` | `/api/opportunities/{slug}/report` | Markdown report |
| `GET` | `/api/clusters` | Problem clusters + member count + priority |
| `GET` | `/api/signals` | Collected signals |
| `GET` | `/api/costs/summary` | LLM cost breakdown |
| `POST` | `/api/orchestrate` | Trigger full pipeline cycle |

Frontend routes: `/dashboard`, `/opportunities`, `/opportunities/[slug]`, `/signals`, `/problems`, `/clusters/[id]`, `/monitoring`, `/settings`.

## Project Structure

```
AutomatedSaaS_RnD_System/
├── backend/
│   ├── app/
│   │   ├── core/               # config, database, base_agent, LLM gateway
│   │   ├── sources/            # signal collectors (Reddit, HN, GitHub, RSS)
│   │   ├── problems/           # extraction + clusterer (embeddings + agglomerative)
│   │   ├── research/           # 7-agent swarm
│   │   ├── opportunities/      # scorer, ranking, synthesizer, report templates
│   │   ├── control/            # PipelineControl API
│   │   └── workers/            # Celery tasks + monitoring (costs, health)
│   ├── alembic/                # PG migrations
│   └── pyproject.toml
├── frontend/
│   ├── app/                    # Next.js App Router (dashboard, opportunities, problems, signals, monitoring)
│   ├── components/             # opportunity-table, problem-table, cluster-table, control-panel, live-task-tracker
│   └── lib/api.ts              # typed API client
├── deployments/
│   ├── docker/docker-compose.yml
│   ├── DEPLOYMENT.md
│   └── terraform/ (digitalocean, aws)
└── docs/plan.md
```

## Screenshots

<div class="project-screenshots-grid" style="margin: 2rem 0;">
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/automated-rnd-system/dashboard-overview.png' | relative_url }}" data-caption="Dashboard — Autonomous SaaS R&D intelligence overview: 1497 signals, 487 problems, 25 clusters, 12 opportunities, pipeline controls, live tasks, signal categories & problem severity" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/automated-rnd-system/dashboard-overview.png' | relative_url }}" alt="SaaS R&D Dashboard" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;">
            <i class="fas fa-expand" style="color: white; font-size: 2rem;"></i>
          </div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Dashboard — Intelligence Overview</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/automated-rnd-system/opportunities-ranked.png' | relative_url }}" data-caption="Opportunities — 12 scored, ranked opportunities with Rank, Confidence, Evidence count, Est. ARPU, Competition, MVP timeline and Research status" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/automated-rnd-system/opportunities-ranked.png' | relative_url }}" alt="Ranked Opportunities Table" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Opportunities — Ranked & Scored</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/automated-rnd-system/opportunity-detail-invoice-agent.png' | relative_url }}" data-caption="Opportunity Detail — Autonomous AI Invoice & Financial Workflow Agent (62.4/100, 90% confidence): 8-factor score breakdown, evidence/ARPU/competition/MVP, testable hypotheses & executive summary" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/automated-rnd-system/opportunity-detail-invoice-agent.png' | relative_url }}" alt="Autonomous AI Invoice Agent Detail" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Opportunity Detail — AI Invoice Agent (62.4)</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/automated-rnd-system/opportunity-detail-bookkeeping.png' | relative_url }}" data-caption="Opportunity Detail — Plain-English AI Bookkeeping for Micro-SMBs (50.6/100, 30% confidence): score breakdown, testable hypotheses & research report" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/automated-rnd-system/opportunity-detail-bookkeeping.png' | relative_url }}" alt="Plain-English AI Bookkeeping Detail" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Opportunity Detail — AI Bookkeeping (50.6)</p>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="screenshot-item" data-image="{{ '/assets/img/projects/automated-rnd-system/problem-clusters.png' | relative_url }}" data-caption="Problem Clusters — 25 clusters grouped by embeddings (e.g., manual invoicing, waste, failed billing) with members, priority, and Research/Skip actions" style="cursor: pointer; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="position: relative;">
          <img src="{{ '/assets/img/projects/automated-rnd-system/problem-clusters.png' | relative_url }}" alt="Problem Clusters" class="img-fluid" style="width: 100%; height: auto; display: block;">
          <div class="screenshot-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
        </div>
        <p class="text-center mt-2 mb-0" style="font-size: 0.9rem; color: #666; padding: 0.5rem;">Problem Clusters — Agglomerative Grouping</p>
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
    <span id="current-image-index">1</span> / <span id="total-images-count">5</span>
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

## Quick Start

```bash
# Clone & configure
cp .env.example .env   # set LiteLLM keys (or use Ollama for zero cost)

# Docker Compose (VPS)
docker compose -f deployments/docker/docker-compose.yml up -d
# API → http://localhost:8000/docs | Dashboard → http://localhost:3000

# Local dev
cd backend && pip install -e ".[dev]" && uvicorn app.main:app --reload
cd frontend && npm install && npm run dev
```

Set `RND_MONTHLY_BUDGET_LIMIT=50` for budget alerts; use `Ollama` for Cheap tier to run at $0.

## Roadmap

- [x] Signal collector (Reddit, HN, GitHub, RSS, web search)
- [x] Signal classification (Cheap LLM) + problem extraction
- [x] Embeddings + Agglomerative clustering for problem clusters
- [x] 7-agent LangGraph research swarm + weighted scorer + Markdown reports
- [x] Dashboard with pipeline controls, live tasks, severity & category analytics, scored opportunities & detail views
- [ ] Add Review/Complaint app-store sources and job-posting miner
- [ ] Founder-fit & distribution-channel scorer tuning
- [ ] Automated landing-page experiment launcher per top opportunity
- [ ] Vector recall evolution (pgvector HNSW tuning, change-point detection for trends)

---

## Project Overview

The Automated SaaS R&D System demonstrates an end-to-end autonomous venture-research platform: a FastAPI + LangGraph backend, pgvector-backed semantic clustering, a multi-agent LLM research harness, and a Next.js dashboard for human-in-the-loop control. It is built to be left running for months, compounding signal and research knowledge, with reproducible reports and cost-aware LLM routing.
