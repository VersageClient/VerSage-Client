const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');

const crypto = require('./crypto'); // 'crypto' dosyanın bulunduğu dizini doğru şekilde ayarlayın

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix) || message.channel.type === 'dm') return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Komut çalıştırılırken bir hata oluştu.');
    }
});

client.login(token);

// (Önceki kodlar...)

const lisansSilKomutu = require('./commands/LisansSil');

client.commands.set(lisansSilKomutu.name, lisansSilKomutu);

// (Daha sonraki kodlar...)

// (Önceki kodlar...)

const lisansEkleKomutu = require('./commands/LisansEkle');

client.commands.set(lisansEkleKomutu.name, lisansEkleKomutu);

// (Daha sonraki kodlar...)


// (Önceki kodlar...)

const lisansKontrolKomutu = require('./commands/LisansKontrol');

client.commands.set(lisansKontrolKomutu.name, lisansKontrolKomutu);

// (Daha sonraki kodlar...)

module.exports = {
    name: 'unban',
    description: 'Belirtilen kullanıcının banını açar.',
    async execute(message, args) {
        const userID = args[0];

        if (!userID || isNaN(userID)) {
            return message.reply('Banını açmak için bir kullanıcı IDsi belirtmelisin.');
        }

        // Ban açma işlemi burada gerçekleştirilir.
        message.guild.members.unban(userID)
            .then(() => message.reply(`ID'si ${userID} olan kullanıcının banı başarıyla açıldı.`))
            .catch(error => {
                console.error(`Ban açma sırasında bir hata oluştu: ${error}`);
                message.reply('Belirtilen kullanıcının banını açarken bir hata oluştu.');
            });
    },
};

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is your website!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Website is running!');
});

// Discord bot kodlarınızı buraya ekleyin
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is online!');
});

client.login(process.env.BOT_TOKEN);
