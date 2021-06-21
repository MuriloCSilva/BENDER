const Discord = require('discord.js');

module.exports = {
    run: async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Bender - Sistema de Say", 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription(`Erro! apenas administradores podem utilizar este comando <a:errado_animado:852530967419682826>`)
            .setFooter('Feito com carinho por MX#0777')
        );
      }

    const embed = new Discord.MessageEmbed()
    .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
    .setColor('#3847F3')
    .setDescription('Mencione ou envie o ID do canal que voce deseja enviar a mensagem')
    .addField('<a:3339_loading:845293736522154015> Tempo', '`Voce possui 30 segundos para mencionar o canal`')
    .addField('<a:errado_animado:852530967419682826> Caso queira cancelar envie:', '`cancelar`')
    .setFooter('Feito com carinho por MX#0777')

    const msgPrincipal = await message.channel.send(embed);
    let erro = false;
    let coletado;
    await message.channel
    .awaitMessages((m) => m.channel.id === message.channel.id, {
        time: 30000,
        max: 1,
        errors: ["time"]
    })
    .then((collected) => {
        coletado = collected.first().content.trim().split(/ +/g);
        collected.first().delete();
    })
    .catch((err) => {
        erro = true;
        msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription('Erro! Você não mencionou o canal a tempo <a:errado_animado:852530967419682826>')
        .setFooter('Feito com carinho por MX#0777')
        ).then(msg => msg.delete({timeout: 5000}));
    })

    let filtrocn = coletado[0].replace(".", "").replace("#", "").replace("<", "").replace(">", "");

    if (coletado[0] === "cancelar" || coletado[0] === "parar") {
        msgPrincipal.edit(
            new Discord.MessageEmbed()
            .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription(`Comando cancelado por ${message.author} <a:errado_animado:852530967419682826>`)
            .setFooter('Feito com carinho por MX#0777')
        ).then(msg => msg.delete({timeout: 5000}))
        return;
    }

    const canal = message.guild.channels.cache.find((c) => c.id === filtrocn);
    if (!canal) {
        msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Erro! Não consegui encontrar esse canal ${message.author} <a:errado_animado:852530967419682826>`)
        .setFooter('Feito com carinho por MX#0777')
        ).then(msg => msg.delete({timeout: 5000}))
    }

    /// COR ///

    msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Envie a cor que voce deseja no formato hexadecimal, exemplo: #3847F3`)
        .addField('<a:3339_loading:845293736522154015> Tempo', '`Voce possui 2 minutos para enviar a cor`')
        .addField('<a:errado_animado:852530967419682826> Caso voce queira cancelar envie:', '`cancelar`')
        .addField('<a:1180staff:855149403684470784> Cores:', `
        Cor Bender - \`#3847F3\`
        Verde - \`#38F357\`
        Amarelo - \`#F3ED38\`
        Roxo - \`#6400FF\`
        Vermelho - \`#F43232\`
        Laranja - \`#F4A832\``)
        .setFooter('Feito com carinho por MX#0777')
    );
    erro = false;
    let coletado2;
    await message.channel
    .awaitMessages((m) => m.channel.id === message.channel.id, {
        time: 120000,
        max: 1,
        errors: ["time"]
    })
    .then((collected) => {
        coletado2 = collected.first().content.trim().split(/ +/g);
        collected.first().delete();
    })
    .catch((err) => {
        erro = true;
        msgPrincipal.edit(
            new Discord.MessageEmbed()
            .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Você não enviou as cores a tempo <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            ).then(msg => msg.delete({timeout: 5000}));
            return;
    })
    if (coletado2[0] === 'cancelar' || coletado2[0] === 'parar') {
        msgPrincipal.edit(
            new Discord.MessageEmbed()
            .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription(`Comando cancelado por ${message.author} <a:errado_animado:852530967419682826>`)
            .setFooter('Feito com carinho por MX#0777')
            ).then(msg => msg.delete({timeout: 5000})
        );
    return;
    }

    if (!coletado2[0].startsWith('#')) {
        msgPrincipal.edit(
            new Discord.MessageEmbed()
            .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Você não enviou a cor na formatação correta. Exemplo de formatação: `#3847F3` <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            ) 
            return;
    }

    /// MENSAGEM ///

    msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription(`Envie a mensagem que voce deseja`)
        .addField('<a:3339_loading:845293736522154015> Tempo', '`Voce possui 3 minutos para enviar a mensagem`')
        .addField('<a:errado_animado:852530967419682826> Caso voce queira cancelar envie:', '`cancelar`')
        .setFooter('Feito com carinho por MX#0777')
    );
    erro = false;
    let coletado3;
    await message.channel
    .awaitMessages((m) => m.channel.id === message.channel.id, {
        time: 180000,
        max: 1,
        errors: ["time"]
    })
    .then((collected) => {
        coletado3 = collected.first().content;
        collected.first().delete();
    })
    .catch((err) => {
        erro = true;
        msgPrincipal.edit(
            new Discord.MessageEmbed()
            .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Você não enviou a mensagem a tempo <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            );
            return;
    });

    const filtroUrl = /(?:https?|ftp):\/\/[\n\S]+/g
    const mensagemUrl = filtroUrl.exec(coletado3)
    if (mensagemUrl) {
        coletado3 = coletado3.replace(urlRegex, '');
        let emebedsayuser = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor(coletado2[0])
        .setImage(mensagemUrl[0])
        .setDescription(coletado3)
        .setFooter("Atenciosamente, "+`${message.author.username}`)
        client.channels.cache.get(filtrocn).send(emebedsayuser)
    }   else {
        const emebedsayuser = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor(coletado2[0])
        .setDescription(coletado3)
        .setFooter("Atenciosamente, "+`${message.author.username}`)
        client.channels.cache.get(filtrocn).send(emebedsayuser)
    }

    msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Say', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription('Mensagem enviada com sucesso no canal: ' + coletado + '  <a:certo_animado:852530967805165578>')
        .setFooter('Feito com carinho por MX#0777')
    )

    }
}