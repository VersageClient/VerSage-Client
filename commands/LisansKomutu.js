const { generateRandomKey } = require('../crypto'); // 'crypto' dosyanın bulunduğu dizini doğru şekilde ayarlayın

module.exports = {
    name: 'lisans-oluştur',
    description: 'Etiketlenen kullanıcıya lisans oluşturur.',
    async execute(message, args) {
        const targetUser = message.mentions.users.first();
        
        if (!targetUser) {
            return message.reply('Lisans oluşturmak için bir kullanıcıyı etiketlemelisin.');
        }

        const licenseKey = generateRandomKey(12);

        try {
            const dmChannel = await targetUser.createDM();
            dmChannel.send(`Merhaba ${targetUser.username}, lisansınız: \`${licenseKey}\``);
            message.reply(`${targetUser.username}'e başarıyla lisans gönderildi!`);
        } catch (error) {
            console.error(`DM gönderirken hata oluştu: ${error}`);
            message.reply('Kullanıcıya DM gönderirken bir hata oluştu.');
        }
    },
};
