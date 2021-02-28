const fs = require('fs');

module.exports = {
    name: "m2t",
    description: "Shift morse to text",
    async execute(message, args) {
        const alphabet = {
            ".-": "A",
            "-...": "B",
            "-.-.": "C",
            "-..": "D",
            ".": "E",
            "..-.": "F",
            "--.": "G",
            "....": "H",
            "..": "I",
            ".---": "J",
            "-.-": "K",
            ".-..": "L",
            "--": "M",
            "-.": "N",
            "---": "O",
            ".--.": "P",
            "--.-": "Q",
            ".-.": "R",
            "...": "S",
            "-": "T",
            "..-": "U",
            "...-": "V",
            ".--": "W",
            "-..-": "X",
            "-.--": "Y",
            "--..": "Z",
            ".----": "1",
            "-.-.--": "!",
            "..---": "2",
            ".--.-.": "@",
            "...--": "3",
            "....-": "4",
            "...-..-": "$",
            ".....": "5",
            "-....": "6",
            "--...": "7",
            ".-...": "&",
            "---..": "8",
            "----.": "9",
            "-.--.": "(",
            "-----": "0",
            "-.--.-": ")",
            "-.-.-.": ";",
            "---...": ":",
            ".----.": "'",
            "--..--": ",",
            ".-.-.-": ".",
            "-..-.": "/",
            "..--..": "?",
            "-....-": "-",
            "..--.-": "_",
            "-...-": "=",
            ".-.-.": "+",
            "/": " "
        };
        if (!Object.keys(alphabet).includes(args[0])) return message.reply("Please enter valid morse code!")
        let morses = "";
        args.forEach(res => {
            morses += `${res} `
        });
        let morse = morses.slice(0, -1)
        if (!morse.trim()) return message.reply('Please enter valid morse code!')

        let messageConverted = [];
        
        await morse.split("   ").map(function (word) {
            word.split(" ").map(function (letter) {
                messageConverted.push(alphabet[letter]);
            });
            messageConverted.push(" ");
        });

        const text = messageConverted.join("");

        message.channel.send(`Morse Code = ${morse} \n Text = ${text}`)
    }
}