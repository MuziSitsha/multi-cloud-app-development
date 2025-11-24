const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint for Azure
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'Healthy',
    service: 'AI Assistant API',
    environment: process.env.NODE_ENV || 'production',
    cloud: 'Azure App Service',
    timestamp: new Date().toISOString(),
    url: 'https://inniapp.azurewebsites.net'
  });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 AI Assistant successfully deployed on Azure!',
    version: '2.0.0',
    features: ['Multi-Cloud', 'CI/CD', 'Auto Deployment'],
    deployment: {
      platform: 'Azure App Service',
      resourceGroup: 'INNIT-RG',
      plan: 'Free Tier',
      runtime: 'Node.js 22'
    },
    endpoints: {
      health: '/health',
      api: '/api/v1'
    }
  });
});

// API endpoint
app.get('/api/v1', (req, res) => {
  res.json({
    project: 'Multi-Cloud App Deployment',
    team: '3 Members',
    week: 'Week 5',
    capabilities: ['AWS', 'Azure', 'DevOps', 'CI/CD']
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Access via: https://inniapp.azurewebsites.net`);
});

module.exports = app;