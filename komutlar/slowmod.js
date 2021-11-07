const Discord = require("discord.js");
const db = require("nrc.db")
const ms = require('rhino-ms')


module.exports = {
    calistir: async(client, message, args) => {



        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

        const zaman = ms(args.join(" "), {birim: "saniye"})
        if(!args[0]) return message.channel.send("Lütfen Bir Zaman Dilimi Belirtin.\nÖrnek: !yavaşmod 10s = Yavaş Mod 10 saniye olarak ayarlarsın.\nRakamın Sonunda H(saat) M(dakika) S(saniye) yazınız yoksa sistem çalışmaz.")
        if (zaman < 0 || zaman > 21600) return message.reply('Lütfen 0 Saniye ile 6 Saat Arası Süre Girin!')
        const slowmode = Math.floor(zaman)
        message.channel.setRateLimitPerUser(slowmode)
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTimestamp()
        .setColor("BLUE")
        .setTitle('Yavaş Mod Ayarlandı')
        .setDescription(`**Slowmode Ayarlanan Kanal: ** <#${message.channel.id}>\n**Süre: **` + args.join(" "))
        .setImage("https://cdn.glitch.me/2f9a3bcc-456b-4787-9a0f-e65e286ea42e%2Fstandard_28.gif")
        message.channel.send({embeds: [embed]})



},

name: "slowmod",
description: "Kanal yavaş mod ayarlarsın",
aliases: ["yavaşmod"],
kategori: "mod",
usage: "",
}