const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {

        var imagens = [
            'https://pa1.narvii.com/6457/fba783d9bd0ad25e4e6c505b08b9ce48d6c8d1bb_hq.gif',
            'https://i.pinimg.com/originals/0e/b2/c4/0eb2c4fa2f940aa63c69d3e23809240c.gif',
            'https://i.pinimg.com/originals/df/ee/6e/dfee6e7841913e2b6ecbe9384538b9e6.gif',
            'https://media.tenor.com/images/b7df388d9e184030b9e311108acbe643/tenor.gif'

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
        .setDescription(`${message.author} deu um soco em ${usuario}`)
        .setImage(aleatorio)
        .setFooter('Feito com carinho por MX#0777')
        message.channel.send(embed1)

    }
}