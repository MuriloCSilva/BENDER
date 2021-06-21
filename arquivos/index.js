const Discord = require('discord.js');//Requerindo módulos discord.js
const client = new Discord.Client();//Criando um novo cliente do discord
const config = require('../config.json'); //Requerindo configurações
const database = require('../database')
const fs = require('fs');
const { disconnect } = require('process');

client.on("ready", () => {
    console.log(" ");
    console.log("Estou online papai :)");
    
    console.log(`Setando presenças!`)
    const botStatus = [ 
      "Olá, eu sou Bender! Estou na minha versão 1.1",
      "Meu prefixo é: !",
      "Meu papai é o: MX#0777"
    ];
    setInterval(() => {
      const stts = Math.floor(Math.random() * (botStatus.length - 1) + 1); 
      client.user.setActivity(botStatus[stts],{type: "PLAYING"}); 
    }, 10000);
   

});



client.on("message", message => {
    if (message.channel.type == 'dm') return; //Se alguem enviar uma mensagem via DM o evento é retornado e nada acontece
    if (message.author.bot) return; //Se o autor da mensagem for um bot o evento é retornado e nada acontece
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
    const argumentos = message.content
        .trim().slice(config.prefix.length).split(/ +/g);

        const comando = argumentos.shift().toLocaleLowerCase();
        if (!comando) return;
        let comandos = ['beijar', 'abracar', 'socar', 'ajuda', 'ban', 'ship', 'say', 'kick', 'ping'];
        let vfComandos = comandos.includes(`${comando}`);
        if (vfComandos) {
            let rodarcomando = require(`./comandos/${comando}.js`)
            rodarcomando.run(client, message, args)
            return;
        }

        else {
            const embedcomandonexiste = new Discord.MessageEmbed()
            .setAuthor('Bender - Comandos', 'https://cdn.discordapp.com/app-icons/854445481060859964/dd098f0dc533651ec93e8d34d7e01f03.png?size=64')
            .setColor('#3847F3')
            .setDescription('Erro! Esse comando não existe. <a:errado_animado:852530967419682826>\n\ Para ver meus comandos basta usar o comando: `!ajuda`')
            .setFooter('Feito com carinho por MX#0777')
            message.channel.send(embedcomandonexiste)
            return;
        }

});

client.login(config.token);