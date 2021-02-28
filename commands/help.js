const fs = require('fs');

module.exports = {
    name: "help",
    description: "To Show Any Commands",
    execute(message, args) {
        fs.readFile('./commands/help.md', 'utf-8', function (err, file) {
            if (err) {
                message.channel.send(err);
                return
            }
            message.channel.send(file)
        })
    }
}