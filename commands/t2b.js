module.exports = {
    name: "t2b",
    description: "",
    async execute(message, args) {
        // function text2bin(string) {
        //     return string.split('').map(function (char) {
        //         return char.charCodeAt(0).toString(2);
        //     }).join(' ');
        // }
        let texts = ''
        args.forEach(res => {
            texts += `${res} `
        });
        let text = texts.slice(0, -1)
        if (!text.trim()) return message.reply('Please enter valid text!')
        let binnary = text.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
        
        await message.channel.send(`Text = ${text} \n Binnary Code = ${binnary}`)
    }
}