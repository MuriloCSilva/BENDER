const Discord = require('discord.js')

module.exports = {
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Bender - Ship', client.user.displayAvatarURL())
        .setColor('#3847F3')
        .setDescription('Mencione duas pessoas que voce deseja shipar')
        .addField('<a:errado_animado:852530967419682826> Caso queira cancelar a operação envie:', '`cancelar`')
        .addField('<a:3339_loading:845293736522154015> Tempo', 'Voce possui **30 segundos** para mencionar duas pessoas')
        .setFooter('Feito com carinho por MX#0777')

        let msgPrincipal = await message.channel.send(embed)
        let erro = false;
        let coletado;
        await message.channel
        .awaitMessages((m) => m.author.id === message.author.id, {
            max: 1,
            time: 30000,
            errors: ["time"]
        })
        .then((collected) => {
            coletado = collected.first().content.trim().split(/ +/g);;
            collected.first().delete(); //apaga a mensagem que o usuário enviou
            if (coletado[0] === 'cancelar' || coletado[0] === 'parar') {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                    .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                    .setColor('#3847F3')
                    .setDescription(`Comando cancelado por ${message.author} <a:errado_animado:852530967419682826>`)
                    .setFooter('Feito com carinho por MX#0777'));
                    return;
            }

            if (coletado[1] === null || coletado[0] === '') {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                    .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                    .setColor('#3847F3')
                    .setDescription(`Voce não mencionou o usuário, então vou considerar que ele é você`)
                    .setFooter('Feito com carinho por MX#0777'));
            }

            function vfuser2() {
            if (!coletado[1]) {
                return message.author
            } else return coletado[1]}

            const amor = Math.floor(Math.random() * 100)

            if (amor <= 40) {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                        .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                        .setColor('#3847F3')
                        .setTitle('Poxa acho que não rola nada... <a:saddd:855090917231558706>')
                        .setDescription(`${coletado[0]} e ${vfuser2()}`)
                        .addField('Amor:', `${amor}%  [\`████....\`]`)
                        .setFooter('Feito com carinho por MX#0777')
                        .setImage('https://media4.giphy.com/media/aRG50ZepFNMuk/giphy.gif')
                        );
                        return;
            }

            if (amor <= 70) {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                        .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                        .setColor('#3847F3')
                        .setTitle('Vai que rola? <a:gatinho_dancando:855091847440236544>')
                        .setDescription(`${coletado[0]} e ${vfuser2()}`)
                        .addField('Amor:', `${amor}% [\`██████..\`]`)
                        .setFooter('Feito com carinho por MX#0777')
                        .setImage('https://i.pinimg.com/originals/11/8a/c9/118ac94d9f00f9b668223113a5944af4.gif')
                        );
                        return;
            }

            if (amor >= 70) {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                        .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                        .setColor('#3847F3')
                        .setTitle('#MEU CASAL <a:sanji_apaixonado:855092570543620176>')
                        .setDescription(`${coletado[0]} e ${vfuser2()}`)
                        .addField('Amor:', `${amor}% [\`██████.\`]`)
                        .setFooter('Feito com carinho por MX#0777')
                        .setImage('https://acegif.com/wp-content/uploads/anime-love-29.gif'));
                        return;
            }

            if (amor = 100) {
                msgPrincipal.edit(
                    new Discord.MessageEmbed()
                        .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                        .setColor('#3847F3')
                        .setTitle('Acho que temos um amor verdadeiro aqui')
                        .setDescription(`${coletado[0]} e ${vfuser2()}`)
                        .addField('Amor:', `${amor}% [\`██████.\`]`)
                        .setFooter('Feito com carinho por MX#0777')
                        .setImage('https://i.pinimg.com/originals/c9/af/b1/c9afb1a1284a11f364ee35b1b80b085f.gif'));
                        return;
            }

        })
        .catch((err) => {
            erro = true;
            msgPrincipal.edit(
                new Discord.MessageEmbed()
                .setAuthor('Bender - Ship', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
                .setColor('#3847F3')
                .setDescription(`Erro! Você não mencionou os usuários a tempo <a:errado_animado:852530967419682826>`)
                .setFooter('Feito com carinho por MX#0777'));
            console.log(err)
        })
    }
}