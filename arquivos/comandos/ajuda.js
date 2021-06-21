const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor('Bender - Ajuda', client.user.displayAvatarURL())
        .setColor('#3847F3')
        .setDescription('**Bem-vindo ao meu sistema de ajuda!**\n\n Olá! Eu sou o Bender, fui criado pelo meu papai MX para ajudar na moderação de servidores e divertir seus membros!\n\n <:1_:845331208632008705> - `Comandos de diversão`\n\ <:2_:845331208689680385> - `Comandos de administração`\n\ <a:engrenagem:854712810021191680> - `Voltar para pagina pricipal`')
        .setFooter('Feito com carinho por MX#0777')

        message.channel.send(embed).then(async (msg) => {
            msg.react('<:1_:845331208632008705>')
            msg.react('<:2_:845331208689680385>')
            msg.react('<a:engrenagem:854712810021191680>')

            const diversaoFilter = (reaction, user) => reaction.emoji.name === '1_' && user.id === message.author.id;
            const admFilter = (reaction, user) => reaction.emoji.name === '2_' && user.id === message.author.id;
            const voltarFilter = (reaction, user) => reaction.emoji.name === 'engrenagem' && user.id === message.author.id;
        
     
            const diversao = msg.createReactionCollector(diversaoFilter);
            const adm = msg.createReactionCollector(admFilter);
            const voltar = msg.createReactionCollector(voltarFilter);

            voltar.on('collect', react => {
                react.users.remove(message.author.id);
                const embedpgpricipal = new Discord.MessageEmbed()
                .setAuthor('Bender - Ajuda', client.user.displayAvatarURL())
                .setColor('#3847F3')
                .setDescription('**Bem-vindo ao meu sistema de ajuda!**\n\n Olá! Eu sou o Bender, fui criado pelo meu papai MX para ajudar na moderação de servidores e divertir seus membros!\n\n Me adicione em seu servidor: [Clique aqui](https://discord.com/oauth2/authorize?client_id=854445481060859964&scope=bot&permissions=8)\n\n  <:1_:845331208632008705> - `Comandos de diversão`\n\ <:2_:845331208689680385> - `Comandos de administração`\n\ <a:engrenagem:854712810021191680> - `Voltar para pagina pricipal`')
                .setFooter('Feito com carinho por MX#0777')
                msg.edit(embedpgpricipal)
            })

            diversao.on('collect', react => {
                react.users.remove(message.author.id);
                const embeddiversao = new Discord.MessageEmbed()
                .setAuthor('Bender - Ajuda', client.user.displayAvatarURL())
                .setColor('#3847F3')
                .setDescription('**Ola! Esses são meus comandos de diversão:**\n\n `beijar` - Beije alguem mecionando essa pessoa\n\ `abracar` - Abraçe alguem mencionando essa pessoa\n\ `socar` - Dê um soco em alguem\n\ `ship` - Shipe duas pessoas e veja o nivel de amor')
                .setFooter('Feito com carinho por MX#0777')
                msg.edit(embeddiversao)
            })

            adm.on('collect', react => {
                react.users.remove(message.author.id);
                const embedadm = new Discord.MessageEmbed()
                .setAuthor('Bender - Ajuda', client.user.displayAvatarURL())
                .setColor('#3847F3')
                .setDescription('**Ola! Esses são meus comandos para administração:**\n\n `ban` - Serve para banir alguem do servidor\n\ `kick` - Serve para expulsar alguem do servidor\n\ `say` - Envie uma bela mensagem em um embed\n\ `ping` = Veja o meu ping')
                .setFooter('Feito com carinho por MX#0777')
                msg.edit(embedadm)
            })

        })

    }
}