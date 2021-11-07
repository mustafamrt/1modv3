const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        if (!role) return message.reply('Lütfen Almak İstediğiniz Rolü Etiketleyin!')
        if (!member) return message.reply('Lütfen Rol Almak İstediğiniz Kişiyi Etiketleyin!')
        member.roles.remove(role)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Rolü Aldım`)
        .setDescription(`**Rolü Alınan Kullanıcı: **${message.mentions.users.first()}\n**Alınan Rol: **${role}\n**Yetkili: <@${message.author.id}>**`)
        .setTimestamp()
        .setColor("BLUE")
        .setImage("https://cdn.glitch.me/2f9a3bcc-456b-4787-9a0f-e65e286ea42e%2Fstandard_28.gif")
        message.channel.send({embeds: [embed]})


},

name: "rolal",
description: "İstediğin rolü bir kişiden rol alırsın.",
aliases: [],
kategori: "mod",
usage: "",
}