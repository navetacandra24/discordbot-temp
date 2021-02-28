module.exports = {
    name: "clear",
    description: "clear messages",
    async execute(message, args) {
        if (!message.member.roles.cache.has('805003247562784798')) return message.reply("You don't have permisson!")
        if (!args[0]) return message.reply('Please enter the amount of messages that you want delete!')
        if (isNaN(args[0])) return message.reply('Please enter a real number!')

        if(args[0] < 1) return message.reply('You must delete at least one message!')
        if (args[0] > 100) return message.reply("You cannot delete more than 100 messages!")

        await message.channel.messages.fetch({ limit: args[0] }).then(valDel => {
            message.channel.bulkDelete(valDel)
        })
    }
}