module.exports = {
    name: 'ban',
    description: 'Belirtilen kullanıcıyı banlar.',
    execute(message, args) {
        const targetUser = message.mentions.users.first();

        if (!targetUser) {
            return message.reply('Banlamak için bir kullanıcıyı etiketlemelisin.');
        }

        const targetMember = message.guild.members.cache.get(targetUser.id);

        if (!targetMember) {
            return message.reply('Belirtilen kullanıcı sunucuda bulunmuyor.');
        }

        // Banlama işlemi burada gerçekleştirilir.
        targetMember.ban()
            .then(() => message.reply(`${targetUser.username} başarıyla banlandı.`))
            .catch(error => {
                console.error(`Banlama sırasında bir hata oluştu: ${error}`);
                message.reply('Belirtilen kullanıcıyı banlarken bir hata oluştu.');
            });
    },
};
