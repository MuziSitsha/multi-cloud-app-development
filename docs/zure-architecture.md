# Azure Architecture Documentation

## Current Deployment
- **App Service Name**: INNIAPP
- **URL**: https://inniapp.azurewebsites.net
- **Resource Group**: INNIT-RG
- **Runtime**: Node.js 22 on Windows
- **Service Plan**: Free (F1)
- **Region**: South Africa North

## CI/CD Pipeline Configuration

### GitHub Actions Workflow
- **Trigger**: Push to main branch
- **Runner**: Windows latest
- **Stages**: Test → Build → Deploy
- **Authentication**: Publish Profile

### Deployment Process
1. **Code Commit** to main branch
2. **Automated Tests** run on Windows environment
3. **Dependencies** installed via npm
4. **Deployment** to existing Azure App Service
5. **Health Verification** post-deployment

## Security
- **Authentication**: Azure Publish Profile
- **Permissions**: Limited to specific App Service
- **Secrets**: Stored in GitHub Secrets

## Cost Management
- **Current Tier**: Free (F1)
- **Features**: 1 GB memory, 1 hour/day CPU
- **Scaling**: Can upgrade to paid tiers as needed