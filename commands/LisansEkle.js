const { generateRandomKey } = require('../crypto'); // 'crypto' dosyanın bulunduğu dizini doğru şekilde ayarlayın

module.exports = {
    name: 'lisans-ekle',
    description: 'Etiketlenen kullanıcıya lisans süresi ekler.',
    execute(message, args) {
        const targetUser = message.mentions.users.first();

        if (!targetUser) {
            return message.reply('Lisans süresi eklemek için bir kullanıcıyı etiketlemelisin.');
        }

        const durationInDays = parseInt(args[0]);

        if (isNaN(durationInDays) || durationInDays <= 0) {
            return message.reply('Geçerli bir gün sayısı belirtmelisin.');
        }

        // Lisans süre ekleme işlemi burada gerçekleştirilebilir.
        // Örneğin: Kullanıcının lisans süresini bir veritabanında saklıyorsanız, buradan güncelleyebilirsiniz.

        message.reply(`${targetUser.username}'in lisans süresi ${durationInDays} gün uzatıldı.`);
    },
};
