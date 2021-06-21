const Discord = require('discord.js')

module.exports = {
    name: "ping",
    cooldown: 3,

    run: async (client, message, args) => {

        message.delete()

        const ping = Math.round(message.client.ws.ping)
        
        const embedping = new Discord.MessageEmbed()
        .setAuthor('Bender - Ping', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Ola ${message.author}! Este é meu comando para ver meu ping`)
        .addField('**Ping** <a:ping:856579101360259082>', `\`${ping}\``)
        .setFooter('Feito com carinho por **MX#0777**')
        message.channel.send(embedping)
        
    }
}