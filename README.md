# Multi-Stage Node.js CI/CD Pipeline on Azure

This project demonstrates a professional DevOps workflow for a **Node.js 20 LTS** application. It implements a multi-stage pipeline using **Azure DevOps (YAML)**, focusing on the "Build Once, Promote Often" philosophy and automated environment governance.

## 🎯 Project Objectives

*   Implement a **Multi-Stage Pipeline** using YAML.
*   Ensure **Artifact Immutability** (the same build used in all stages).
*   Configure **Environment-specific deployments** to Azure App Service (Linux).
*   Enforce **Manual Approval Gates** for Production releases.

## 🏗️ Architecture

The pipeline is divided into three distinct stages:

1.  **Build Stage**:
    *   Installs dependencies via `npm install`.
    *   Archives the application into a `.zip` artifact named with a unique `BuildId`.
    *   Publishes the artifact to the Azure Pipeline storage.

2.  **Staging Stage**:
    *   Automatically downloads the artifact.
    *   Deploys to a "Staging" Azure Web App.
    *   Uses `runOnce` deployment strategy.

3.  **Production Stage**:
    *   **Pre-requisite**: Requires manual approval from the Environment manager.
    *   Deploys the identical artifact to the "Production" Azure Web App.

## 💻 Tech Stack

*   **Language**: Node.js 20 LTS
*   **Framework**: Express.js
*   **CI/CD**: Azure Pipelines (YAML)
*   **Cloud**: Azure App Service (Linux)

## 🚀 Getting Started

### Prerequisites

*   An Azure Account and an Azure DevOps Organization.
*   A **Service Connection** (Azure Resource Manager) created in Azure DevOps.
*   Two Web Apps created in Azure: `yourname-webapp-staging` and `yourname-webapp-prod`.

### File Structure
