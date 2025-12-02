/**
 * CRM Inmobiliario n8n - Main Server Entry Point
 * @author Yoselin Vilchis
 * @version 1.0.0
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: process.env.CORS_CREDENTIALS === 'true'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load configuration files
const crmConfig = require('./crm-config.json');
const leadModel = require('./lead-model.json');
const messageTemplates = require('./message-templates.json');

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    service: 'CRM Inmobiliario n8n'
  });
});

// API version endpoint
app.get('/api/version', (req, res) => {
  res.status(200).json({
    version: crmConfig.crm.version,
    name: crmConfig.crm.name,
    description: crmConfig.crm.description,
    developer: crmConfig.crm.developer
  });
});

// Configuration endpoint
app.get('/api/config', (req, res) => {
  res.status(200).json({
    leads: crmConfig.leads,
    channels: crmConfig.channels,
    followup_days: Object.keys(crmConfig.followup_sequence).length
  });
});

// API routes placeholder
app.use('/api/leads', (req, res) => {
  res.status(200).json({ message: 'Leads API - Coming soon' });
});

app.use('/api/followups', (req, res) => {
  res.status(200).json({ message: 'Followups API - Coming soon' });
});

app.use('/api/campaigns', (req, res) => {
  res.status(200).json({ message: 'Campaigns API - Coming soon' });
});

// n8n webhook endpoints
app.post('/webhook/new-lead', (req, res) => {
  res.status(200).json({ status: 'Webhook received', webhook: 'new-lead' });
});

app.post('/webhook/lead-response', (req, res) => {
  res.status(200).json({ status: 'Webhook received', webhook: 'lead-response' });
});

app.post('/webhook/schedule-callback', (req, res) => {
  res.status(200).json({ status: 'Webhook received', webhook: 'schedule-callback' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.path} not found`,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    environment: NODE_ENV
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`🚀 CRM Inmobiliario n8n Server`);
  console.log(`========================================`);
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📡 Environment: ${NODE_ENV}`);
  console.log(`🔗 API URL: http://localhost:${PORT}`);
  console.log(`\n📚 Available endpoints:`);
  console.log(`   - GET  /health`);
  console.log(`   - GET  /api/version`);
  console.log(`   - GET  /api/config`);
  console.log(`   - POST /webhook/new-lead`);
  console.log(`   - POST /webhook/lead-response`);
  console.log(`   - POST /webhook/schedule-callback`);
  console.log(`========================================\n`);
});

module.exports = app;
