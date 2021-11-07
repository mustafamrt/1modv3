const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {


        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        if (!message.guild) {
          const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor('GREEN')
          .setTimestamp()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField('Uyarı', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
          .setImage("https://cdn.glitch.me/2f9a3bcc-456b-4787-9a0f-e65e286ea42e%2Fstandard_28.gif")
          return message.author.send(ozelmesajuyari); }

          let reason = args.slice(1).join(' ');
          let user = message.mentions.users.first();

          if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);
        

          message.guild.members.cache.get(user).ban();
        
          message.channel.send(" Başarılı, " + user + " **İD'li kullanıcı** " + reason + " **sebebiyle sunucudan yasaklandı.**")



},

name: "ban",
description: "Ban Atarsın",
aliases: [],
kategori: "mod",
usage: "",
}