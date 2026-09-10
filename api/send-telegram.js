export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = request.body || {};
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return response.status(500).json({ error: 'Telegram is not configured' });
  }

  if (typeof message !== 'string' || !message.trim() || message.length > 4000) {
    return response.status(400).json({ error: 'Invalid message' });
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!telegramResponse.ok) {
      return response.status(502).json({ error: 'Telegram rejected the message. Check the bot token and chat ID.' });
    }

    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ error: 'Telegram is unavailable' });
  }
}
