const fs = require('fs');

module.exports = {
    name: "t2m",
    description: "Shift text to morse",
    execute(message, args) {
        let morseArr = {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "!": "-.-.--",
            "@": ".--.-.",
            "$": "...-..-",
            "&": ".-...",
            "(": "-.--.",
            ")": "-.--.-",
            ";": "-.-.-.",
            ":": "---...",
            "'": ".----.",
            ",": "--..--",
            ".": ".-.-.-",
            "/": "-..-.",
            "?": "..--..",
            "-": "-....-",
            "_": "..--.-",
            "=": "-...-",
            "+": ".-.-.",
            " ": "/"
        };

        let texts = ''
        args.forEach(res => {
            texts += `${res} `
        });
        let text = texts.slice(0, -1)
        let morse = '';
        if (!text.trim()) return message.reply('Please enter valid text!')

        for (let i = 0; i < text.length; i++) {
            if (morseArr[text[i].toLowerCase()] === undefined) morse += '# '
            else morse += `${morseArr[text[i].toLowerCase()]} `
        }
        message.channel.send(`Text = ${text} \n Morse Code = ${morse}`)
    }
}