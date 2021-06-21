const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {

        var imagens = [
            'https://data.whicdn.com/images/203117396/original.gif',
            'https://acegif.com/wp-content/gif/anime-hug-79.gif',
            'https://i.pinimg.com/originals/65/85/f0/6585f0603e2c4bf49e1c6f62fa0abe26.gif',
            'https://i.pinimg.com/originals/3d/aa/34/3daa34205381fc84833a1508baf5111d.gif',
            'https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif'

        ]

        var aleatorio = imagens[Math.floor(Math.random() * imagens.length)]
        const argumentos = message.content.split(/ +/g).slice([0])
        const usuario = argumentos[1]

        if (!usuario) {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor('Bender - Abracar', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Voce não mencionou um usuário <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            message.channel.send(embed2)
            return;
        }

        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Bender - Abracar', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Eita! ${message.author} abraçou ${usuario}`)
        .setImage(aleatorio)
        .setFooter('Feito com carinho por MX#0777')
        message.channel.send(embed1)

    }
}