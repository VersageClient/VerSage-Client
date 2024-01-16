// Bu örnekte lisans sürelerini basit bir nesne içinde saklıyoruz
// Gerçek bir uygulamada, lisansları genellikle bir veritabanında saklamak daha iyidir.

const lisanslar = new Map();

module.exports = {
    name: 'lisans-kontrol',
    description: 'Etiketlenen kullanıcının lisans süresini kontrol eder.',
    execute(message, args) {
        const targetUser = message.mentions.users.first();

        if (!targetUser) {
            return message.reply('Lisans süresini kontrol etmek için bir kullanıcıyı etiketlemelisin.');
        }

        // Lisans süre kontrolü burada gerçekleştirilebilir.
        // Örneğin: Kullanıcının lisans süresini bir veritabanından alabilirsiniz.
        const userLicense = lisanslar.get(targetUser.id);

        if (userLicense) {
            message.reply(`${targetUser.username}'in lisans süresi ${userLicense} gün.`);
        } else {
            message.reply(`${targetUser.username}'in bir lisansı bulunmuyor.`);
        }
    },
};
