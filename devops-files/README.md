# 🍕 Zomato Clone — Secure Deployment with DevSecOps CI/CD

![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/sreepradaa/zomato-devops/ci-cd.yml?label=CI%2FCD&logo=github-actions&style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-009639?style=flat-square&logo=nginx)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> A full-stack food delivery web application inspired by Zomato, built with **React.js** and deployed using a complete **DevSecOps CI/CD pipeline** — featuring automated security scanning, containerization, and continuous deployment.

---

## 📸 Screenshots

| Home Page | Restaurant Menu | Cart & Order |
|-----------|----------------|--------------|
| Search, filter & browse restaurants | Full interactive menu with add-to-cart | Live cart with order placement |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Developer Machine                        │
│  React App  →  Git Push  →  GitHub Repository              │
└─────────────────────┬───────────────────────────────────────┘
                      │ triggers
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                GitHub Actions CI/CD Pipeline                │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Code    │→ │  Build   │→ │  Docker  │→ │  Push    │  │
│  │ Quality  │  │  React   │  │  Build + │  │DockerHub │  │
│  │npm audit │  │  App     │  │  Trivy   │  │  Image   │  │
│  │npm test  │  │npm build │  │  Scan    │  │  Push    │  │
│  └──────────┘  └──────────┘  └──────────┘  └────┬─────┘  │
└─────────────────────────────────────────────────┼──────────┘
                                                  │ deploys
                                                  ▼
┌─────────────────────────────────────────────────────────────┐
│                  Production Server (AWS EC2)                │
│                                                             │
│   ┌─────────────────────────────────────────────────┐      │
│   │              Docker Network                     │      │
│   │                                                 │      │
│   │  ┌──────────────┐     ┌──────────────────────┐ │      │
│   │  │ Nginx Proxy  │────▶│    Zomato React App  │ │      │
│   │  │   Port 80    │     │  (Nginx static serve) │ │      │
│   │  └──────────────┘     │      Port 3000        │ │      │
│   │                       └──────────────────────┘ │      │
│   └─────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔐 DevSecOps Pipeline Stages

| Stage | Tool | What it does |
|-------|------|-------------|
| **1. Code Quality** | npm audit | Checks for known vulnerabilities in dependencies |
| **2. Unit Tests** | React Testing Library | Runs automated test suite |
| **3. Build** | React Scripts | Compiles optimized production bundle |
| **4. Docker Build** | Docker Buildx | Multi-stage build — Node builder + Nginx server |
| **5. Security Scan** | Trivy | Scans Docker image for CVEs (Critical/High) |
| **6. Push** | DockerHub | Tags and pushes image to container registry |
| **7. Deploy** | SSH + Docker | Pulls latest image, restarts container on server |

---

## 🚀 Tech Stack

**Frontend**
- React 18.3 with Hooks
- React Router v6
- Material UI (MUI) v5
- SASS/SCSS

**DevOps & Infrastructure**
- Docker (multi-stage build)
- Docker Compose (multi-container orchestration)
- Nginx (reverse proxy + static file serving)
- GitHub Actions (CI/CD automation)
- Trivy (container security scanning)

---

## ⚡ Quick Start

### Run with Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/sreepradaa/zomato-devops.git
cd zomato-devops

# Build and run with Docker Compose
docker-compose up --build

# App is live at http://localhost:3000
```

### Run Locally (Development)

```bash
# Install dependencies
npm install

# Start development server
$env:NODE_OPTIONS="--openssl-legacy-provider"   # Windows PowerShell
npm start

# App runs at http://localhost:3000
```

### Build for Production

```bash
# Build production bundle
npm run build

# Build Docker image
docker build -t zomato-clone .

# Run Docker container
docker run -d -p 3000:80 --name zomato zomato-clone
```

---

## 🌟 Features

- 🔍 **Live Search** — Search restaurants, cuisines, or dishes in real-time
- 🏷️ **Smart Filters** — Filter by category, Pure Veg, Fast Delivery, Top Rated
- 📋 **Interactive Menus** — Full restaurant menus with add/remove cart controls
- 🛒 **Cart System** — Persistent cart with item totals, taxes & delivery fee
- 🔐 **Auth Flow** — Login & Signup with form validation
- 📱 **Fully Responsive** — Works on mobile, tablet and desktop
- 🎯 **Order Tracking** — Simulated order placement with delivery tracker
- 🌆 **Locality Filter** — Browse restaurants by Ahmedabad neighbourhoods
- 📦 **Collections** — Curated restaurant collections (Buffet, Luxury, Cafes, etc.)

---

## 📁 Project Structure

```
zomato-devops/
├── public/                    # Static assets
├── src/
│   ├── assets/images/         # App images
│   ├── components/
│   │   ├── Card/              # Order Online / Nightlife / Dining cards
│   │   ├── Cart/              # Shopping cart sidebar
│   │   ├── Cities/            # Locality filter section
│   │   ├── Collections/       # Curated collection cards
│   │   ├── CTA/               # Get the App section
│   │   ├── Footer/            # Site footer
│   │   ├── Header/            # Navbar + hero search
│   │   ├── RestaurantList/    # Restaurant grid with filters
│   │   └── RestaurantMenu/    # Menu modal with cart integration
│   ├── App.js                 # Root component + routing
│   ├── data.js                # Restaurant & menu data
│   ├── Login.js               # Login page
│   ├── Signup.js              # Signup page
│   └── AddRestaurant.js       # Partner registration page
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions pipeline
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Multi-container orchestration
├── nginx.conf                 # Nginx reverse proxy config
├── .env.example               # Environment variables template
└── README.md
```

---

## 🔧 GitHub Actions Setup

To enable the full CI/CD pipeline, add these **Secrets** to your GitHub repo:
`Settings → Secrets and variables → Actions → New repository secret`

| Secret | Description |
|--------|-------------|
| `DOCKERHUB_USERNAME` | Your DockerHub username |
| `DOCKERHUB_TOKEN` | DockerHub access token (not password) |
| `EC2_HOST` | EC2 public IP address |
| `EC2_USER` | `ubuntu` |
| `EC2_SSH_KEY` | Contents of your `.pem` private key file |

---

## 🐳 Docker Commands Reference

```bash
# Build image
docker build -t zomato-clone .

# Run container
docker run -d -p 3000:80 --name zomato zomato-clone

# View running containers
docker ps

# View logs
docker logs zomato

# Stop and remove
docker stop zomato && docker rm zomato

# Run with docker-compose
docker-compose up -d --build

# Tear down
docker-compose down
```

---

## 📊 CI/CD Pipeline Flow

```
git push origin main
        │
        ▼
┌───────────────────┐
│  Code Quality     │ ── npm install → npm test → npm audit
└────────┬──────────┘
         │ ✅ pass
         ▼
┌───────────────────┐
│  Build React App  │ ── npm run build → upload artifact
└────────┬──────────┘
         │ ✅ pass
         ▼
┌───────────────────┐
│  Docker Build +   │ ── docker build → trivy scan → report
│  Security Scan    │
└────────┬──────────┘
         │ ✅ pass
         ▼
┌───────────────────┐
│  Push to DockerHub│ ── docker tag → docker push :latest
└────────┬──────────┘
         │ ✅ pass (main branch only)
         ▼
┌───────────────────┐
│  Deploy to EC2    │ ── ssh → docker pull → docker run
└───────────────────┘
```

---

## 👩‍💻 Team

Built as part of a DevOps internship project demonstrating end-to-end secure deployment practices.

---

## 📄 License

This project is for educational purposes, inspired by [Zomato](https://www.zomato.com).
Reference: [NotHarshhaa/Zomato-Clone](https://github.com/NotHarshhaa/Zomato-Clone)
