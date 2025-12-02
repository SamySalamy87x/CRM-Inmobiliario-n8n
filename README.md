# CRM-Inmobiliario-n8n

**Automated Real Estate CRM with n8n Integration**

A comprehensive Customer Relationship Management (CRM) system designed for real estate agents and teams, featuring automated lead management, multi-channel follow-up sequences, and n8n workflow integration.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Models](#database-models)
- [API Endpoints](#api-endpoints)
- [n8n Integration](#n8n-integration)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Lead Management
- **Lead Capture**: Collect leads from multiple sources (email, WhatsApp, web, referrals)
- **Lead Status Tracking**: Manage leads through 6-state workflow (nuevo, contactado, interesado, agendado, ganado, perdido)
- **Lead Scoring**: Automatic scoring based on engagement and interactions
- **Lead Database**: Centralized database with complete lead history

### Automated Follow-up Sequences
- **5-Day Follow-up Cycle**: Intelligent timing and channel selection
  - Day 1 (18:00): Email with personalized greeting + audio + bot options
  - Day 2 (09:00): WhatsApp with property photos + bot options
  - Day 3 (19:30): WhatsApp with property invitation + bot options
  - Day 4 (14:00): WhatsApp with brochure + bot options
  - Day 5 (12:00): WhatsApp with video + call-to-action

### Multi-Channel Communication
- **Email**: Gmail integration with personalized templates
- **WhatsApp**: Twilio-based messaging with rich media support
- **Google Calendar**: Automatic event scheduling and calendar sync
- **Bot Integration**: Interactive bot options for lead engagement

### Workflow Automation
- **n8n Webhooks**: Real-time lead processing
- **Auto-Scheduling**: Automatic calendar booking based on lead preferences
- **Conditional Routing**: Smart lead routing based on preferences and availability
- **Response Tracking**: Capture and analyze lead interactions

## 🛠️ Tech Stack

- **Backend**: Node.js / Express.js
- **Database**: MongoDB / PostgreSQL
- **Workflow Engine**: n8n (hosted or self-hosted)
- **Communication**: 
  - Gmail API
  - Twilio (WhatsApp)
  - Google Calendar API
- **Frontend**: React.js / Vue.js (optional dashboard)

## 📦 Installation

### Prerequisites
- Node.js v14+ and npm
- MongoDB or PostgreSQL
- n8n instance (local or cloud)
- API Keys:
  - Gmail API credentials
  - Twilio account
  - Google Calendar API

### Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/SamySalamy87x/CRM-Inmobiliario-n8n.git
cd CRM-Inmobiliario-n8n

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Configure environment variables
# Edit .env with your credentials

# 5. Start the server
npm start

# 6. API running on http://localhost:3000
```

## ⚙️ Configuration

### CRM Configuration (crm-config.json)

The main configuration file contains:

```json
{
  "crm": {
    "name": "Ciudad Maderas CRM",
    "version": "1.0.0",
    "description": "Automated CRM for Real Estate Lead Management"
  },
  "leads": {
    "states": ["nuevo", "contactado", "interesado", "agendado", "ganado", "perdido"],
    "sources": ["email", "whatsapp", "web", "referencia", "otro"]
  },
  "channels": {
    "email": { "enabled": true, "provider": "gmail" },
    "whatsapp": { "enabled": true, "provider": "twilio" },
    "google_calendar": { "enabled": true }
  }
}
```

## 📊 Database Models

### Lead Model

Key fields in the lead database:

- `id`: UUID identifier
- `name`: Full name
- `email`: Email address
- `phone`: WhatsApp number
- `source`: Lead source
- `status`: Current status
- `created_at`: Creation timestamp
- `followup_day`: Current follow-up day (1-5)
- `next_followup`: Next follow-up timestamp
- `interested`: Boolean interest indicator
- `preferred_contact`: Communication preference
- `response_A_count`, `response_B_count`, `response_C_count`: Response tracking

## 🔌 API Endpoints

### Lead Operations

```
POST   /api/leads               - Create new lead
GET    /api/leads               - List all leads
GET    /api/leads/:id           - Get lead details
PUT    /api/leads/:id           - Update lead
DELETE /api/leads/:id           - Delete lead
PATCH  /api/leads/:id/status    - Update lead status
```

### Follow-up Operations

```
GET    /api/followups/:leadId   - Get follow-up history
POST   /api/followups           - Schedule follow-up
PATCH  /api/followups/:id       - Update follow-up status
```

### Campaign Operations

```
GET    /api/campaigns           - List campaigns
POST   /api/campaigns           - Create campaign
GET    /api/campaigns/:id/stats - Campaign statistics
```

## 🔗 n8n Integration

### Webhook Configuration

Three main webhooks for automation:

1. **New Lead Webhook**: `/webhook/new-lead`
   - Triggered when a new lead is created
   - Initiates 5-day follow-up sequence

2. **Lead Response Webhook**: `/webhook/lead-response`
   - Captures bot option selections
   - Updates lead status and scheduling

3. **Schedule Callback Webhook**: `/webhook/schedule-callback`
   - Handles calendar scheduling
   - Confirms appointments

### n8n Workflow Templates

Included workflow templates:
- Lead capture and initial processing
- Daily follow-up sequence execution
- Response handling and lead scoring
- Calendar integration and notifications

## 📖 Usage Guide

### Adding a New Lead

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Perez",
    "email": "juan@example.com",
    "phone": "+528001234567",
    "source": "whatsapp"
  }'
```

### Tracking Lead Progress

1. Monitor lead status in the dashboard
2. Review follow-up history
3. Check automated message sends
4. View engagement metrics

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💼 Author

**Yoselin Vilchis** - Lead Developer
**Ciudad Maderas CRM** - v1.0.0

## 🔗 Resources

- [n8n Documentation](https://docs.n8n.io/)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp)
- [Gmail API](https://developers.google.com/gmail/api)
- [Google Calendar API](https://developers.google.com/calendar)

---

**Last Updated**: December 2025
**Status**: Active Development
