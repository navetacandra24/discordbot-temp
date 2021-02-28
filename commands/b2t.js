module.exports = {
    name: "b2t",
    description: "",
    execute(message, args) {
        let bins = ''
        args.forEach(res => {
            bins += `${res} `
        });
        let bin = bins.slice(0, -1);
        if (!bin.trim()) return message.reply('Please enter valid binnary code!');

        let binCode = bin.split(" ");
        let texts = [];
            
        for (let i = 0; i < binCode.length; i++) {
            texts.push(String.fromCharCode(parseInt(binCode[i], 2)));
        }

        let text = texts.join("");
        message.channel.send(`Binnary Code = ${bin} \n Text = ${text}`)
    }
}