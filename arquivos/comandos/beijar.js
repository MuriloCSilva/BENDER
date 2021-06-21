const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {

        var imagens = [
            'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
            'https://i.pinimg.com/originals/9c/be/bf/9cbebfb852e76c2b8d9c3b72ae08e68f.gif',
            'https://i.pinimg.com/originals/7d/49/fa/7d49fa49476dda9b040541a83342ceac.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-30.gif'
        ]

        var aleatorio = imagens[Math.floor(Math.random() * imagens.length)]
        const argumentos = message.content.split(/ +/g).slice([0])
        const usuario = argumentos[1]

        if (!usuario) {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor('Bender - Kiss', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Voce não mencionou um usuário <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            message.channel.send(embed2)
            return;
        }

        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Bender - Kiss', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Eita! ${message.author} beijou ${usuario}`)
        .setImage(aleatorio)
        .setFooter('Feito com carinho por MX#0777')
        message.channel.send(embed1)

    }
}