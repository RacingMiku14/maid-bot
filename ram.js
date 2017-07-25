const Discord = require('discord.js');
const client = new Discord.Client();

var config = require('./config.json');
client.login(config.token);

var inVoice = false;
var musicQueue = [];
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
//var dispatcher = null;


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
  // Set the prefix
  let prefix = config.prefix;
  const args = message.content.split(/\s+/g);

  var command = args[0].toLowerCase();
  var randomNumber = 0;
  // Exit and stop if it's not there
 //if (!message.content.startsWith(prefix) || message.author.bot) return;

//if(message.author.id == "132473496793120768") {
    //message.channel.send("This user does not have power over Ram.");
//}
 switch (command) {
 	case prefix + 'rem':
 		console.log(message.author.id + " !rem");
 		randomNumber = Math.floor(Math.random()*2);
 		if (randomNumber <= 0){
 			message.reply('<:maidJudge:334926137908264960>'); // custom emoji for the server this bot is used on
 		}
 		else if (randomNumber > 1){
 			message.reply('!rem does not work. Neither does !ram.');
 		}
 		break;
 	case prefix + 'help':
 		console.log(message.author.id + " !help");
 		if (randomNumber <= 0){
 			message.reply('I do not require help. <:maidNo:334926151229243393>');
 		}
 		else if (randomNumber > 1){
 			message.reply('I think you can figure it out on your own. Ram believes in you. <:ahegaoBestGirl:328075922932629506>');
 		}
 		break;
 	case prefix + 'compliment':
 		console.log(message.author.id + " !compliment");
 		if (randomNumber <= 0){
 			message.reply('Please stop doing that.');
 		}
 		else if (randomNumber > 1){
 			message.reply('Compliments will only get you so far in life.');
 		}
 		break;
 	case prefix + 'timer':
 		console.log(message.author.id + " !timer");
 		if (args[1] == null){
 		message.reply('You must use !timer with a set number of minutes.');
 		}
 		else{
 		try{
 		var userid = message.author.id;
 		var timer = parseInt(args[1]);
 		} catch (e) {
 			message.channel.send('You must input an integer.');
 			console.log(message.author.id + " Error on !timer");
 		}
  		setTimeout(timerNotify, timer * 60000);
  		}
  		function timerNotify() {
    		message.channel.send('<@' + userid + '> Timer is finished.');
		}
 		break;
 	case prefix + '8ball':
 		console.log(message.author.id + " !8ball");
 		var randomNumber = Math.floor(Math.random()*20);
 		switch (randomNumber) {
 			case 0:
 			message.reply('It is certain.');
 			break;
 			case 1:
 			message.reply('It is decidely so.');
 			break;
 			case 2:
 			message.reply('Without a doubt.');
 			break;
 			case 3:
 			message.reply('Yes definitely.');
 			break;
 			case 4:
 			message.reply('You may rely on it.');
 			break;
 			case 5:
 			message.reply('As I see it, yes.');
 			break;
 			case 6:
 			message.reply('Most likely.');
 			break;
 			case 7:
 			message.reply('Outlook good.');
 			break;
 			case 8:
 			message.reply('Yes.');
 			break;
 			case 9:
 			message.reply('Signs point to yes.');
 			break;
 			case 10:
 			message.reply('Reply hazy, try again.');
 			break;
 			case 11:
 			message.reply('Ask again later.');
 			break;
 			case 12:
 			message.reply('Better not tell you now.');
 			break;
 			case 13:
 			message.reply('Cannot predict now.');
 			break;
 			case 14:
 			message.reply('Concentrate and ask again.');
 			break;
 			case 15:
 			message.reply('Don\'t count on it.');
 			break;
 			case 16:
 			message.reply('My reply is no.');
 			break;
 			case 17:
 			message.reply('My sources say no.');
 			break;
 			case 18:
 			message.reply('Outlook not so good.');
 			break;
 			case 19:
 			message.reply('Very doubtful.');
 		}
 		break;
 	case prefix + 'id':
 		console.log(message.author.id + " !id");
 		message.reply(message.author.id);
 		break;
 	case prefix + 'delete':
 		console.log(message.author.id + " !delete");
 		if (args[1] == null){
 		var messagecount = 1;
  		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
 		}
 		else{
 		try{
 		var messagecount = parseInt(args[1]);
 		} catch (e) {
 			message.channel.send('You must input an integer.');
 			console.log(message.author.id + " Error on !delete");
 		}
  		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  		}
 		break;
 	case prefix + 'voice':
 	console.log(message.author.id + " !voice");
  		if (message.member.voiceChannel) {
  			if (!inVoice) {
  			inVoice = true; 
     		message.member.voiceChannel.join()
        	.then(connection => { // Connection is an instance of VoiceConnection
          		message.reply('I have successfully connected to the channel!');
        	})
        	.catch(console.log);
        }
        	else {
        		message.member.voiceChannel.leave();
        	}
    	} else {
      		message.reply('You need to join a voice channel first!');
    	}
 		break;
 	case prefix + 'play':
 		if (inVoice){
 			if (args[1] == null){ // check if !play contains a link argument
 			console.log(message.author.id + " !play");
 				if (musicQueue.length != 0){
 					var link = musicQueue.pop(); 
   					try{
   						const stream = ytdl(link, { filter : 'audioonly' });
   						var dispatcher = message.guild.voiceConnection.playStream(stream, streamOptions);
   						dispatcher.on('end', () => {
						if (musicQueue.length != 0){
							var link = musicQueue.pop();
   						try{
   							const stream = ytdl(link, { filter : 'audioonly' });
   						} catch (e) {
   						message.channel.send('Invalid link, can\'t play stream.');
   						}
   						dispatcher = message.guild.voiceConnection.playStream(stream, streamOptions);
						}
					});
   					} catch (e) {
   						message.channel.send('Invalid link, can\'t play stream.');
   						console.log(message.author.id + " Error on !play");
   					}
   				}
   			}
   			else{
   			console.log(message.author.id + " !play " + args[1]);
   			try{
   			const stream = ytdl(args[1], { filter : 'audioonly' });
   			var dispatcher = message.guild.voiceConnection.playStream(stream, streamOptions);
   			dispatcher.on('end', () => {
				if (musicQueue.length != 0){
					var link = musicQueue.pop();
   					try{
   						const stream = ytdl(link, { filter : 'audioonly' });
   					} catch (e) {
   					message.channel.send('Invalid link, can\'t play stream.');
   				}
   				dispatcher = message.guild.voiceConnection.playStream(stream, streamOptions);
				}
			});
   			} catch (e) {
   			message.channel.send('Invalid link, can\'t play stream.');
   			}
  			}
  		}
   		else{
   			message.reply('Please add me to your voice channel using !voice first.');
   		}
   		break;
   	case prefix + 'queue':
   		if (args[1] == null){
   			message.reply('You didn\'t link anything to queue.');
   		}
   		else{
   		musicQueue.push(args[1]);
   		console.log(message.author.id + " !queue " + args[1]);
   	}
   		break;
   	case prefix + 'skip':
   		console.log(message.author.id + " !skip");
   		message.reply('My creator is too lazy to copy/paste, just use !play to skip.');
 }
});

client.on('ready', () => {
	console.log("Maid bot online.");
	client.user.setGame('maid bot in training');
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	if (newMember.voiceChannel == null){
		console.log("Ram has left the voice channel.");
		inVoice = false;
	}
	else{
		console.log("Ram has joined the voice channel.");
		//console.log(message.author.id + " !skip");
		inVoice = true;
	}
});

/*
voiceChannel.on('speaking', (user, speaking) => {

	// the audio has finished playing, so remove it from the queue and start playing the next song
	if (!speaking && ytAudioQueue.length > 1) {
		ytAudioQueue.pop();

		if (voiceChannel == null) {
			JoinCommand(bot.channels.find(val => val.type === 'voice').name).then(function() {
				PlayStream(ytAudioQueue.first);
			});
		}
		else {
			PlayStream(ytAudioQueue.first);
		}
	}
});
*/