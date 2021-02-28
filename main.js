const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config()

const prefix = '/'
const client = new Discord.Client();
client.commands = new Discord.Collection();


// Logging In
client.once('ready', function () {
    console.log('Bot is Ready Now!');
});
client.login(process.env.DJS_TOKEN);

// Commands List
const commandsFile = fs.readdirSync('./commands/').filter(files => files.endsWith('.js'))
for(const file of commandsFile) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}


client.on('message', function(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (client.commands.map(e => e.name).includes(command)) {
        client.commands.get(command).execute(message, args)
    }
})