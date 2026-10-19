const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', async (ctx) => {
  await ctx.reply(`Halo dari Android! Pesan Anda: "${ctx.message.text}" berhasil dibaca.`);
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
    }
  } else {
    res.status(200).send('Bot Telegram aktif di Vercel!');
  }
};
