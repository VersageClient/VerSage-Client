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
