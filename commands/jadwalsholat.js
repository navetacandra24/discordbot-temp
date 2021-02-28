const fetch = require('node-fetch')
const API_URL = "https://api.pray.zone/v2/times/today.json?city="

module.exports = {
    name: "jadwalsholat",
    description: "Get prayer times",
    async execute(message, args) {
        if (!args[0]) return message.reply('Please enter your city to get prayer times!');
        if (args.length > 1) return message.reply('Please enter valid city!');

        const city = `${API_URL}${args}`
        const x = await fetch(city);
        const y = await x.json();
        const data = y.results
        const country  = `Negara     : ${data.location.country}`;
        const town     = `Kota       : ${data.location.city}`;
        const timezone = `Zona waktu : ${data.location.timezone}`;
        const time = `Waktu      : \n    - Imsak           : ${data.datetime[0].times.Imsak}\n    - Subuh           : ${data.datetime[0].times.Fajr}\n    - Terbit          : ${data.datetime[0].times.Sunrise}\n    - Zhuhur          : ${data.datetime[0].times.Dhuhr}\n    - Ashar           : ${data.datetime[0].times.Asr}\n    - Terbenam        : ${data.datetime[0].times.Sunset}\n    - Maghrib         : ${data.datetime[0].times.Maghrib}\n    - Isya'           : ${data.datetime[0].times.Isha}\n    - Tengah Malam    : ${data.datetime[0].times.Midnight}`;
        await message.channel.send('```' + country + '\n' + town + '\n' + timezone + '\n' + time + '```')
    }
}