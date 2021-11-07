const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);



let test = db.fetch(`küfürengel_${message.guild.id}`);

if (test)  {

    db.delete(`küfürengel_${message.guild.id}`);
    message.channel.send("Küfür Engel Sistemi **Kapatıldı**")

    return
}

if (!test)  {

    db.set(`küfürengel_${message.guild.id}`, true);
    message.channel.send("Küfür Engel Sistemi **Açıldı**")

    return
}



},

name: "küfür-engel",
description: "Küfür Engel Sistemini Açarsın/Kapatırsın.",
aliases: [],
kategori: "mod",
usage: "",
}