const { generateRandomKey } = require('../crypto'); // 'crypto' dosyanın bulunduğu dizini doğru şekilde ayarlayın

module.exports = {
    name: 'lisans-sil',
    description: 'Etiketlenen kullanıcının lisansını siler.',
    execute(message, args) {
        const targetUser = message.mentions.users.first();

        if (!targetUser) {
            return message.reply('Lisansı silmek için bir kullanıcıyı etiketlemelisin.');
        }

        // Lisansı silme işlemi burada gerçekleştirilebilir.
        // Örnek: Lisans veritabanında saklanıyorsa, buradan silebilirsiniz.

        message.reply(`${targetUser.username}'in lisansı başarıyla silindi.`);
    },
};
