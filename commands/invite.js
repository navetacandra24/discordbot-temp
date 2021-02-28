const { execute } = require("./t2b");

module.exports = {
    name: "invite",
    description: "",
    async execute(message, args) {
        let invite = await message.channel.createInvite({
            maxAge: 604800,
            maxUses: 100,
            unique: true
        })
        
        message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
    }
}