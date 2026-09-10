require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/slackyyy-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/slackyyy-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/slackyyy-bot-ping - Check bot latency
/slackyyy-bot-catfact - Get a cat fact
/slackyyy-bot-joke - Get a random joke
/slackyyy-bot-encrypt [text] - Encode a message
/slackyyy-bot-decrypt [text] - Decode a message
/slackyyy-bot-flip - 50/50 Coinflip`
  });
});

app.command("/slackyyy-bot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    console.error("Cat Fact API Error:", err.message);
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/slackyyy-bot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    console.error("Joke API Error:", err.message);
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/slackyyy-bot-encrypt", async ({ command, ack, respond }) => {
  await ack();
  const text = command.text.trim();

  if (!text) {
    await respond({ text: "Usage: `/slackyyy-bot-encrypt hello world`" });
    return;
  }

  const encoded = Buffer.from(text).toString("base64");
  await respond({ text: `🔒 *Encoded Message:*\n\`${encoded}\`` });
});

app.command("/slackyyy-bot-decrypt", async ({ command, ack, respond }) => {
  await ack();  
  const text = command.text.trim();

  if (!text) {
    await respond({ text: "Usage: `/slackyyy-bot-decrypt aGVsbG8gd29ybGQ=`" });
    return;
  }

  const decoded = Buffer.from(text, "base64").toString("utf8");
  await respond({ text: `🔓 *Decoded Message:*\n${decoded}` });
});

app.command("/slackyyy-bot-flip", async ({ ack, respond}) => {
    await ack();
    const result = Math.random() < 0.5 ? "🪙 *Heads!*" : "🪙 *Tails!*";
    await respond ({ text: result });
})


(async () => {
  await app.start();
  console.log("bot is running!");
})();