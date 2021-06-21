const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {

        message.delete()

        if (!message.guild.me.hasPermission("BAN_MEMBERS")){
            const embederroperm = new Discord.MessageEmbed()
            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Eu não possuo permissão para banir membros <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            message.channel.send(embederroperm).then((msg) => msg.delete({timeout: 8000}))
        }

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            const embederropermusuario = new Discord.MessageEmbed()
            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Você não possui permissão para banir membros <a:errado_animado:852530967419682826>')
            .setFooter('Feito com carinho por MX#0777')
            message.channel.send(embederropermusuario).then((msg) => msg.delete({timeout: 8000}))
        }

        /// MOTIVO ///

        const embed = new Discord.MessageEmbed()
                .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                .setColor('#3847F3')
                .setDescription('Agora dê um motivo para o banimento\n\n Caso não queira dar um motive envie: `sem motivo`\n\ <a:errado_animado:852530967419682826> Caso queira cancelar envie: `cancelar`\n\ <:alarme:845265309846077440> Você possui 1 minuto para enviar o motivo')
                .setFooter('Feito com carinho por MX#0777')
            const msgPrincipal = await message.channel.send(embed);
            let coletado2;
            let erro = false;
            let motivo;
            await message.channel
            .awaitMessages((m) => m.author.id === message.author.id, {
                    time: 60000,
                    max: 1,
                    errors: ["time"]
                })
                .then((collected) => {
                    coletado2 = collected.first().content.trim().split(/ +/g)
                    collected.first().delete();
        
                    if (coletado2 === "cancelar") {
                        msgPrincipal.edit(
                            new Discord.MessageEmbed()
                            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                            .setColor('#3847F3')
                            .setDescription(`Comando cancelado por ${message.author} <a:errado_animado:852530967419682826>`)
                            .setFooter('Feito com carinho por MX#0777')
                        )
                        return;
                    };
        
                    if (coletado2 === "sem motivo") {
                        motivo = "sem motivo"
                    } else {motivo = coletado2}
                })
                .catch((err) => {
                    erro = true;
                    msgPrincipal.edit(
                        new Discord.MessageEmbed()
                        .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                        .setColor('#3847F3')
                        .setDescription(`Erro! Voce não enviou o motivo a tempo <a:errado_animado:852530967419682826>`)
                        .setFooter('Feito com carinho por MX#0777')
                    )
                    return;
                })

        msgPrincipal.edit(
        new Discord.MessageEmbed()
        .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
        .setColor('#3847F3')
        .setDescription('**Mencione ou envie o ID do usuário que voce deseja banir**\n\n <a:errado_animado:852530967419682826> Caso voce deseje **cancelar** a ação envie: `cancelar`\n\ <:alarme:845265309846077440> Você possui 30 segundo para enviar ou mencionar o ID do usuário')
        .setFooter('Feito com carinho por MX#0777'))
        erro = false;
        let coletado;
        await message.channel
        .awaitMessages((m) => m.author.id === message.author.id, {
            max: 1,
            time: 30000,
            errors: ["time"]
        })
        .then((collected) => {
            coletado = collected.first().content.trim().split(/ +/g);;
            let filtro = collected.first().content.trim().split(/ +/g);;
            let idban = filtro[0].split('<').join('').split('@').join('').split('!').join('').split('>').join('')

            collected.first().delete();
            if (coletado[0] === "cancelar" || coletado[0] === "parar") {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                    .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                    .setColor('#3847F3')
                    .setDescription(`Comando cancelado por ${message.author} <a:errado_animado:852530967419682826>`)
                    .setFooter('Feito com carinho por MX#0777')
                );
                return;
            }

            let verificaruser = Number(`${idban}`)
            if (!verificaruser) {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                    .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                    .setColor('#3847F3')
                    .setDescription(`Erro! Mencione alguem ou iD válido<a:errado_animado:852530967419682826>`)
                    .setFooter('Feito com carinho por MX#0777')
                );
                return;
            }
            if (typeof verificaruser == 'number') {
                let user = message.guild.members.cache.get(idban)
                console.log(user)
                if (user) {
                    if (user.permissions.has("BAN_MEMBERS")) {
                        msgPrincipal.edit(
                            new Discord.MessageEmbed()
                            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                            .setColor('#3847F3')
                            .setDescription(`Erro! Voce está tentando banir um usuário que tambem possui permissão para banir <a:errado_animado:852530967419682826>`)
                            .setFooter('Feito com carinho por MX#0777')
                        );
                        return;
                    }

                    if (!user.bannable) {
                        msgPrincipal.edit(
                            new Discord.MessageEmbed()
                            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                            .setColor('#3847F3')
                            .setDescription(`Erro! Voce está tentando banir um usuário acima de mim na hierarquia <a:errado_animado:852530967419682826>`)
                            .setFooter('Feito com carinho por MX#0777')
                        );
                        return;
                    } else user.ban({reason: "Responsável pelo banimento: "+message.author.username})
                    .then(() => {
                        msgPrincipal.edit(
                            new Discord.MessageEmbed()
                            .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                            .setColor('#3847F3')
                            .setDescription(`**Usuário banido com sucesso**`)
                            .addField('Banido por: ', `${message.author}`)
                            .addField('Usuário banido: ', `${user}`)
                            .addField('Motivo: ', `${motivo}`)
                            .setFooter('Feito com carinho por MX#0777')
                        )
                        return;
                    })
                }
            }

        })
        .catch((err) => {
            erro = true;
            msgPrincipal.edit(
                new Discord.MessageEmbed()
                .setAuthor('Bender - Ban', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                .setColor('#3847F3')
                .setDescription(`Erro! Voce não respondeu a tempo ou o ID do usuário é invalido <a:errado_animado:852530967419682826>`)
                .setFooter('Feito com carinho por MX#0777')
            )
            return;
        })


    }
}