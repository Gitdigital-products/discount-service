# 📦 discount-service (Mirror)

> [!IMPORTANT]
> This repository is a **read-only mirror** of the upstream [Gitdigital-products/discount-service](https://github.com/Gitdigital-products/discount-service). 
> **Do not submit Pull Requests here.** All changes must be made in the source repository.

---

### 🛡️ Status & Health
| Build Status | Sync Health | Security Scan | License |
| :--- | :--- | :--- | :--- |
| ![Build](https://img.shields.io/github/actions/workflow/status/your-target-org/discount-service/ci.yml?branch=main) | ![Sync](https://img.shields.io/github/actions/workflow/status/your-target-org/discount-service/mirror-sync.yml?label=mirror-sync) | ![Snyk](https://img.shields.io/snyk/vulnerabilities/github/Gitdigital-products/discount-service) | ![License](https://img.shields.io/github/license/Gitdigital-products/discount-service) |

### 🚀 Tech Stack
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

---

## 🔄 Mirror Configuration
This repository is automatically synchronized every **60 minutes** via GitHub Actions.

- **Source:** `https://github.com/Gitdigital-products/discount-service`
- **Sync Method:** `git push --mirror --prune`
- **Last Sync:** ![Last Sync](https://img.shields.io/github/last-commit/your-target-org/discount-service)

## 🛠️ Internal Usage
To use this service in our internal environment:
1. Update your `pom.xml` or `build.gradle` to point to our internal artifact registry.
2. Ensure your `MIRROR_AUTH_TOKEN` is set in your CI environment variables.

---
*Maintained by the Platform Engineering Team.*

# discount-service
**discount-service** manages discount codes and promotions.  ## Endpoints - `GET /health` — service status - `POST /discount/apply` — apply a discount code to an order (sample) - `GET /discount/:userId` — get available discounts for a user (sample) - `POST /discount/remove` — remove a discount code for a user (sample)  ## Tracing This service 
