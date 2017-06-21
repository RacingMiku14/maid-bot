const Discord = require('discord.js');
const Cleverbot = require('cleverbot-node');
const client = new Discord.Client();
const clbot = new Cleverbot;

var config = require('./config.json');
client.login(config.token);
clbot.configure({botapi: 'CC2xf1sZXvsLxYSw1VtOHqeAunQ'});

// The token of your bot - https://discordapp.com/developers/applications/me
//const token = 'MzI2NjIxOTQxODQ0OTM0NjU3.DCpnMg.xu9E0Ot63CFP3uDjiy5WlmvHjsY';

/*
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
*/

/*
client.on('guildMemberAdd', (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.defaultChannel.send(`"${member.user.username}" has joined this server`);
});
*/

client.on('message', (message) => {
  /*// Set the prefix
  let prefix = config.prefix;

  // Exit and stop if it's not there
 if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send('pong!');
  } else
  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.send('bar!');
  }
  if(message.author.id == "132473496793120768") {
    message.channel.send("be quiet derick");
  }*/
  if (message.channel.type === 'dm') {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});


