const { Client, Intents, Collection, MessageAttachment, MessageEmbed, Permissions, Constants, ApplicationCommandPermissionsManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ayarlar = require("./ayarlar.json");
const db = require("nrc.db");
const message = require("./events/message");
let prefix = ayarlar.prefix;

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./komutcalistirici`)(client);
}); 

client.on("ready", () => {
  require("./events/eventLoader")(client);
});





client.on("messageCreate", async msg => {

  const i =  db.fetch(`küfürengel_${msg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => msg.content.toLowerCase() === kufur)) {
      try {
        if (

          !msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete();
          return msg.channel.send("Küfür Yasak Dostum Lütfen Küfür Etme.")

        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  const i = db.fetch(`küfürengel_${oldMsg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => newMsg.content.toLowerCase() === kufur)) {
      try {
        if (

          !newMsg.member.permissions.has("ADMINISTRATOR")) {
          newMsg.delete();
          return oldMsg
            .reply("Mesajı Düzenlediğini Yakaladım! Küfür yasak.")
     
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



//////////////// reklam engel


client.on("messageCreate ", async msg => {

  let aktif =  db.fetch(`reklamengel_${msg.guild.id}`);
  if (aktif) return;
  let reklamlar = [
    "discord.app",
    "discord.gg",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    ".cf",
    ".me",
    ".in"
  ];

  if (reklamlar.some(nrckelime => message.content.toLowerCase().includes(nrckelime))) {


    if (

      !mesmsgsage.member.permissions.has("ADMINISTRATOR")
    )
      return;
    msg.delete();
    
      msg.channel.send(`${msg.author}, Reklam Yapamazsın Dostum!`)

  }
});

client.on("messageUpdate", async (oldMsg, newMsg, message) => {
  let aktif =  db.fetch(`reklamengel_${newMsg.guild.id}`);
  if (aktif) return;
  let reklamlar = [
    "discord.app",
    "discord.gg",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    ".cf",
    ".me",
    ".in"
  ];

  if (reklamlar.some(nrckelime => newMsg.content.toLowerCase().includes(nrckelime))) {
    if (

!newMsg.member.permissions.has("ADMINISTRATOR")
      )
      return;
    newMsg.delete();
    oldMsg
      newMsg.channel.send("Mesajı Düzenlediğini Yakaladım! Reklam Yapmak Yasak.")
      
  }
});

client.login(ayarlar.token);
