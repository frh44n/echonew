const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = '6529945909:AAEj6Exy95DuR5_J72_D3ht2DUzrvTGzOfQ';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    // Echo the user's message
    bot.sendMessage(chatId, message);
});