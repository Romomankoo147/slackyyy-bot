# Slackyyy Bot

A lightweight Slack bot.


---

## Features

- `/slackyyy-bot-ping` — Checks bot response latency.
- `/slackyyy-bot-help` — Lists all available slash commands.
- `/slackyyy-bot-catfact` — Fetches a random cat fact using the Cat Facts API.
- `/slackyyy-bot-joke` — Fetches a random joke using the Official Joke API.
- `/slackyyy-bot-encrypt` — Encodes a plain text message into Base64 format.
- `/slackyyy-bot-decrypt` — Decodes a Base64 encoded string back into plain text.
- `/slackyyy-bot-flip` — Flips a virtual coin for quick 50/50 decisions.

---

# Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A Slack Workspace with permissions to create and manage apps

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install @slack/bolt axios dotenv
   ```

---

## Configuration

1. **Create a `.env` file** in the root directory:
   ```env
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_APP_TOKEN=xapp-your-app-token
   ```

2. **Slack App Setup Steps**:
   - Go to [Slack API Apps](https://api.slack.com/apps) and create a new app.
   - Enable **Socket Mode** under **Settings > Socket Mode** and generate an **App-Level Token** (`xapp-...`) with the `connections:write` scope.
   - Under **Features > OAuth & Permissions**, add the required Bot Token Scope:
     - `commands`
   - Install the app to your workspace to generate the **Bot User OAuth Token** (`xoxb-...`).
   - Under **Features > Slash Commands**, register the following commands:
    - `/slackyyy-bot-ping` — Checks bot response latency.
    - `/slackyyy-bot-help` — Lists all available slash commands.
    - `/slackyyy-bot-catfact` — Fetches a random cat fact using the Cat Facts API.
    - `/slackyyy-bot-joke` — Fetches a random joke using the Official Joke API.
    - `/slackyyy-bot-encrypt` — Encodes a plain text message into Base64 format.
    - `/slackyyy-bot-decrypt` — Decodes a Base64 encoded string back into plain text.
    - `/slackyyy-bot-flip` — Flips a virtual coin for quick 50/50 decisions.

---

## Running the Bot

Start the application:

```bash
node app.js
```

When successful, you will see in your console:
```text
bot is running!
```

