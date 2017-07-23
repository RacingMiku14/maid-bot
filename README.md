# maid-bot
6/19
Salvaged parts of Dorothy.js
Started new project, Ram.js using Discord.js
Entirely original code, will not use existing code to boost functionality
Created config.json that contains private info for Ram
Added basic commands !ping and !foo
Added CleverBot functionality
7/11
Project back online
Removed CleverBot functionality (official API only allowed for 5000 calls in total)
Learned how to enable emojis for Ram.
7/12
Added basic !voice command that allows Ram to join the user’s voice channel.
7/13
Added basic !play command with an argument that takes in a YouTube link.
7/14
Rewrote if/else statements into a switch/case format (cleaner)
Added additional dialogue lines for the easter egg commands
Added basic !queue command that allows user to queue YouTube links in order
Updated !play command that allows for skipping songs (no previous)
7/15
inVoice boolean now properly set to false when Ram leaves voice channel
7/16
Ram no longer crashes when trying to play invalid YouTube link.
(needs testing) after song ends, next track in queue plays
7/17
Fixed random number generation so that it resets each time command is given
Added magic 8 ball feature
7/18
Added logs to console
7/19
7/20
(needs testing) Added !delete command that deletes a user-input number of messages in the channel
7/21
(needs testing) The !voice command now makes Ram leave the voice channel if she is already in it
7/23
(needs testing) Added !timer command that takes minutes as input and replies to user when timer is finished

To Do
feature testing
expand reminder feature

Errors

Lessons Learned
Remember to check if you included all braces { }
You cannot use properties of variables that are null, instead just check if they are null if that solves it
To get custom emoji code, use \:AhegaoBestGirl: for example
Async/Await
When an event has parameters, you must include them when writing code, for example: client.on('voiceStateUpdate', (oldMember, newMember) => {
How “dummy link” stream error was fixed: initially tried tying an error event to dispatcher and then stream, but isolated error to the creation of the stream using yt-dl, so had to use try/catch
