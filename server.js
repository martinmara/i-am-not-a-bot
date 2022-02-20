const { Client } = require('discord.js');
const client = new Discord.client();

client.on('message', message => {
  if (message.content == 'ping') {
    message.reply('pong');
  }

  if (message.content == 'meme') {
    message.reply('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vox.com%2F2020%2F5%2F1%2F21243747%2Fcoronavirus-memes-ai-fake-computer-generator-imgflip-quarantine&psig=AOvVaw0_-iRKFZwsn57hklFty3SK&ust=1645436768928000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKD4t-L_jfYCFQAAAAAdAAAAABAD');
  }
});

client.login('YOUR_TOKEN');
