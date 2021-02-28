module.exports = {
    name: "ping",
    description: "pinging",
    execute(message, args) {
        // await message.channel.send(`${message.client.ws.ping} ms`)
        // await message.channel.send('Pinging...').
        message.channel.send('Pinging..').then(m => {
            m.edit(`${m.client.ws.ping} ms.`)
        })
    }
}