import * as DC from "discord.js"
import "dotenv/config"

const client = new DC.Client({ intents: [DC.GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


// add enviroment var here
client.login(process.env.BOT_TOKEN);
