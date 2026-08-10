---
layout: page
title: "Quant Trading System Suite"
description: "A production-grade quantitative trading system suite with a vectorized Python backtesting harness, a high-performance C++ limit order book matching engine, an advanced ML & risk management layer, statistical rigor analytics (DSR, PBO, White's Reality Check), and a real-time analytics dashboard."
category:
  - 'Quant'
  - 'Financial'
  - 'ML'
  - 'AI'
  - 'Dev'
  - 'DevOps'
tags:
  - Python
  - C++
  - pybind11
  - Machine Learning
  - Reinforcement Learning
  - PPO
  - LightGBM
  - RandomForest
  - Backtesting
  - Risk Management
  - Statistical Analysis
  - React
  - Flask
  - WebSocket
  - CCXT
  - SQLite
  - Docker
  - GitHub Actions
  - Quant
  - Financial
  - Trading
  - C++17
  - NumPy
  - pandas
link: "https://github.com/dordazrodriguez/quant-trading-system-suite"
date: 2026-08-09
show_date: true
importance: 1
featured: false
---

Project Repo: <a href="https://github.com/dordazrodriguez/quant-trading-system-suite" target="_blank"> https://github.com/dordazrodriguez/quant-trading-system-suite </a>

# quant-trading-system-suite

A production-grade quantitative trading system suite featuring a vectorized Python backtesting harness, a high-performance C++ limit order book matching engine, an advanced ML & risk management layer, statistical rigor analytics, and a real-time analytics dashboard.

**Developer:** David J. Ordaz-Rodriguez <br/>
**Academic Foundation:** B.S. Finance (LSU) & B.S. Computer Science (WGU)
---

## Architecture Overview

```
Historical Data (OHLCV/Tick)
        │
        ▼
WebSocket Tick Feed ──► Vectorized Backtester ──► C++ Limit Order Book
   (CCXT/Simulator)     (Python/NumPy/pd)         Matching Simulator
        │                      │                       │
        │                      ▼                       │
        └─────────────► ML & Signal Engine ◄──────────┘
                        (LightGBM/RF/PPO)
                                │
                                ▼
                        ATR Risk Manager &
                        Execution Gateway
                                │
                                ▼
                    Statistical Rigor Analytics
                    (DSR, PBO, WRC, Feature-IC)
                                │
                                ▼
                        Analytics & Dashboard
                        (React + Flask API + SQLite)
```
---

## Project Layout

```
quant-trading-system-suite/
├── cpp_engine/                 # Module 2: C++ HFT Order Book
│   ├── include/
│   │   ├── OrderBook.h
│   │   └── Order.h
│   ├── src/
│   │   ├── OrderBook.cpp
│   │   ├── lob_replay.cpp      # L2 Market Data Replay Tool
│   │   └── bindings.cpp        # pybind11 exports
│   ├── tests/
│   │   ├── test_orderbook.cpp
│   │   ├── test_depth_benchmark.cpp
│   │   └── CMakeLists.txt
│   └── CMakeLists.txt
├── python_pipeline/            # Modules 1, 3, 4: Backtesting, ML, Analytics
│   ├── backtester/
│   │   ├── vectorized_engine.py
│   │   ├── friction_model.py
│   │   └── walk_forward.py     # WalkForwardRunner with retraining
│   ├── ml_engine/
│   │   ├── feature_prep.py     # 170+ feature indicators
│   │   ├── feature_analysis.py # Feature IC, IC decay, IC stability
│   │   ├── cv_splitters.py     # Purged CV with embargo
│   │   ├── signal/             # LightGBM, RandomForest signal models
│   │   └── rl/                 # PPO agent with TradingEnv
│   ├── analytics/              # DSR, PBO, multiple-testing
│   ├── risk/
│   │   └── atr_manager.py
│   ├── data/
│   │   ├── data_loader.py
│   │   ├── websocket_feed.py
│   │   └── ccxt_client.py      # CCXT live WebSocket client
│   ├── execution/
│   │   └── execution_gateway.py
│   └── logging_config.py
├── dashboard/                  # Module 5: UI & Visualization
│   ├── frontend/               # React + Vite + TailwindCSS
│   └── backend/                # Flask REST API + SQLite
├── data/                       # Sample data
│   ├── sample_ohlcv.csv        # 1000 bars synthetic OHLCV
│   ├── benchmark_returns.csv   # Buy-and-hold benchmark
│   └── generate_sample_data.py
├── tests/                      # PyTest suite (53 tests)
├── config.yaml                 # Centralized configuration
├── pyproject.toml              # Build, ruff, mypy, pytest config
├── AGENTS.md                   # Build & test commands
└── README.md
```
---

## Modules

### Module 1: Vectorized Python Backtesting Harness
- **Fully vectorized** trade execution using NumPy/pandas — no slow `for` loops
- **Maker/Taker fee model** with programmatic spread-crossing detection
- **Stochastic slippage simulator** scaled by ATR and volume-to-depth ratio (seeded for reproducibility)
- **Network latency queue** simulating N-ms execution delay
- **Walk-forward OOS engine** with automated time-series partitioning
- **WalkForwardRunner** with per-fold model retraining (avoids static-strategy bias)

### Module 2: High-Performance C++ Limit Order Book
- **O(1) order add/cancel** via doubly-linked list + unordered_map hash lookup
- **O(log P) price level insertion** via self-balancing `std::map`
- **Price-Time priority** matching engine
- **L2 Market Data Replay Tool** — JSON ingestion and replay with depth snapshots
- **pybind11 Python bindings** for seamless integration with Python pipelines
- **Google Test suite** with comprehensive coverage

### Module 3: ML & Risk Management Layer
- **170+ feature indicators**: momentum, volatility, volume-weighted, statistical, microstructure
- **Order Flow Imbalance (OFI)** and microstructure price imbalance
- **Triple-barrier labeling** (Lopez de Prado) for classification targets
- **Purged Time-Series Cross-Validation** with embargoing
- **LightGBM and RandomForest** signal models with OOS prediction alignment
- **PPO reinforcement learning agent** with custom trading environment
- **Feature IC analysis**: IC, IC decay across horizons, IC stability (rolling window)
- **ATR-based dynamic stop-loss** with intrabar high/low detection
- **Volatility-adjusted position sizing** with strict risk-per-trade cap

### Module 4: Statistical Rigor Analytics
- **Deflated Sharpe Ratio (DSR)** — adjusts for selection bias from multiple trials (Lopez de Prado)
- **Probability of Backtest Overfitting (PBO)** — combinatorially symmetric cross-validation
- **White's Reality Check** — stationary bootstrap for data-snooping detection
- **Multiple-testing corrections** — Bonferroni and Benjamini-Hochberg FDR
- **Turnover & capacity analysis** — per-bar turnover, average holding period

### Module 5: Performance Attribution & Dashboard
- **Sharpe, Sortino, Calmar ratios** with proper CAGR annualization
- **Max Drawdown & Duration** tracking
- **Value at Risk (VaR)** — historical and parametric (95% confidence, 1-day horizon)
- **Linear regression Alpha/Beta decomposition** vs. benchmark
- **SQLite persistence** for backtest results across sessions
- **React dashboard** with equity curves, drawdown charts, return distributions, trade logs, and ML model performance
- **Flask REST API** serving JSON metric endpoints
---

## Quick Start

### Prerequisites
- Python 3.11+
- C++ compiler with C++17 support (GCC 9+, Clang 10+, MSVC 19+)
- CMake 3.16+
- Node.js 18+ (for dashboard frontend)

### 1. Install Python Dependencies
```bash
pip install -e ".[dev,dashboard]"
```

### 2. Build C++ Order Book Engine
```bash
cd cpp_engine
cmake -B build -S .
cmake --build build
```

The `lob_engine` Python module will be in `cpp_engine/build/`.

### 3. Run the Demo
```bash
python demo.py
```

### 4. Run Python Tests
```bash
pytest tests/ -v
```

### 5. Run C++ Tests
```bash
cd cpp_engine/build
ctest --output-on-failure
```

### 6. Lint & Type Check
```bash
ruff check python_pipeline/ tests/
ruff format --check python_pipeline/ tests/
mypy python_pipeline/
```

### 7. Start the Dashboard
```bash
# Backend (Flask API + SQLite)
python dashboard/backend/app.py

# Frontend (React dashboard)
cd dashboard/frontend
npm install
npm run dev
```
---

## Usage Example

```python
import pandas as pd
import numpy as np
from python_pipeline.backtester import VectorizedBacktester, FrictionModel, WalkForwardRunner
from python_pipeline.ml_engine import FeatureEngineer, RandomForestSignalModel
from python_pipeline.analytics import deflated_sharpe_ratio

# Load sample data
ohlcv = pd.read_csv("data/sample_ohlcv.csv", parse_dates=["date"], index_col="date")

# ML signal generation
fe = FeatureEngineer()
model = RandomForestSignalModel(feature_engineer=fe, confidence_threshold=0.55)
perf = model.train(ohlcv)
signals = model.predict_signals(ohlcv)

# Backtest with realistic friction
bt = VectorizedBacktester(
    strategy_fn=lambda df: signals.reindex(df.index).fillna(0),
    friction_model=FrictionModel(maker_fee=0.001, taker_fee=0.002, seed=42),
    initial_capital=100_000,
)
result = bt.run(ohlcv)

print(f"Final equity: ${result.equity_curve.iloc[-1]:,.2f}")
print(f"Max drawdown: {result.drawdown.min():.2%}")

# Walk-forward with retraining
runner = WalkForwardRunner(model=model, train_window=252, test_window=63)
summary = runner.run(ohlcv)
print(f"Aggregate Sharpe: {summary.aggregate_sharpe:.3f}")

# Deflated Sharpe Ratio (adjust for 10 trials)
returns = result.returns.dropna()
sharpe = np.sqrt(252) * returns.mean() / returns.std()
dsr = deflated_sharpe_ratio(sharpe, n_trials=10, sample_length=len(returns), returns=returns)
print(f"Deflated Sharpe: {dsr['deflated_sharpe']:.3f} (p={dsr['dsr_pvalue']:.3f})")
```
---

## C++ LOB Replay Tool

```bash
# Replay L2 market data from JSON
./cpp_engine/build/lob_replay tests/sample_replay_data.json --depth 5 --stats --verbose
```
---

## Configuration

All tunable parameters are centralized in `config.yaml`:

```yaml
backtest:
  initial_capital: 100000
  maker_fee: 0.001
  taker_fee: 0.002
  seed: 42

model:
  type: "lightgbm"  # "lightgbm" | "randomforest" | "ppo"
  confidence_threshold: 0.55

walk_forward:
  train_window: 252
  test_window: 63
  step: 63
```
---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Backtesting Engine | Python, NumPy, pandas |
| Order Book | C++17, pybind11, CMake |
| ML / Features | scikit-learn, LightGBM, stable-baselines3 |
| Statistical Rigor | SciPy (DSR, PBO, WRC, FDR) |
| Risk Management | NumPy (ATR-based) |
| Live Data | CCXT (async WebSocket) |
| Backend API | Flask, Flask-CORS, SQLite |
| Frontend | React 18, Vite, TailwindCSS, Recharts |
| Testing | PyTest (53 tests), Google Test |
| Linting/Types | Ruff, mypy |
| CI/CD | GitHub Actions |
| Deployment | Docker |
---

## Test Results

- **Python tests**: 53/53 passing (unit + integration + analytics)
- **Linting**: ruff clean (0 errors)
- **Type checking**: mypy clean (0 errors in 28 source files)
---

## License

MIT License — See [LICENSE](https://github.com/dordazrodriguez/quant-trading-system-suite/blob/main/LICENSE) for details.
---

