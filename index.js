const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});
 bot.on('ready', () => {
   console.log(`${bot.user.username} is online!`);
  bot.user.setGame(`${bot.guilds.size} servers | >עזרה`);
});

// Updates the bot's status if he joins a server
bot.on("guildCreate", guild => {
   bot.user.setGame(`${bot.guilds.size} servers | >עזרה`);
});

/// Updates the bot's status if he leaves a servers
bot.on("guildDelete", guild => {
    bot.user.setGame(`${bot.guilds.size} servers | >עזרה`);
});




bot.on("message", async message => {
    const logsCommands = bot.channels.get(botconfig.logsChannelID);

  if(message.channel.type == "dm") {
    console.log(`${message.author.tag} שלח לי הודעה פרטית!`);
    return logsCommands.send(`${message.author.tag} שלח לי הודעה פרטית!`);
}

  let prefix = process.env.BOT_PREFIX;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
//---------------------------------------------------------------------------------------------
 
 
 //help
  if(cmd === `${prefix}עזרה` || cmd === `${prefix}help`){
    let icon = bot.user.displayAvatarURL;
    let embed =  new Discord.RichEmbed()
    .setDescription("עזרה")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("prefix", `>`)
    .addField("Commands", `https://github.com/9oS01frMn4k/9oS01Fre/blob/master/README.md`)
    .setFooter("יוצרי הבוט: avishaiDV & NiceGames")
    .setColor('RANDOM')
    .setThumbnail(icon)
    .addField("הזמן אותי", "תכתוב בצאט >הזמן");
     message.delete().catch(O_o=>{});

    message.channel.send(embed)
    console.log(`${message.author.tag} ביקש עזרה מהבוט!`);
    return logsCommands.send(`${message.author.tag} ביקש עזרה מהבוט!`);
}
 
 
 //invite
if(cmd === `${prefix}הזמן` || cmd === `${prefix}invite`){
  let icon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
    .setDescription("הזמן אותי")
    .addField("קישור הזמנה", `https://discordapp.com/api/oauth2/authorize?client_id=466348486800048149&permissions=8&scope=bot`)
    .setThumbnail(icon)
      .setColor('RANDOM')
    .setFooter("יוצרי הבוט: avishaiDV & NiceGames");
    message.delete().catch(O_o=>{});
  message.channel.send(embed)

  console.log(`${message.author.tag} ביקש להזמין אותי!`);
  return logsCommands.send(`${message.author.tag} ביקש להזמין אותי!`);
}
 
 
  //profile image command
if(cmd === `${prefix}פרופיל` || cmd === `${prefix}profile`){
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  .setFooter(`יוצרי הבוט: avishaiDV & NiceGames`);
   message.delete().catch(O_o=>{});
  message.channel.send(embed)

          console.log(`${message.author.tag} השתמש בפקודה פרופיל!`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודה פרופיל!`);
}

//test
    if(cmd === `${prefix}test`){
      let embed = new Discord.RichEmbed()
      .setThumbnail()
      message.delete().catch(O_o=>{});
      message.channel.send(embed)
         console.log(`${message.author.tag} השתמש בפקודת נסיון!`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודת נסיון!`);

    }



//ping
if(cmd === `${prefix}פינג` || cmd === `${prefix}ping`){
 let embed = new Discord.RichEmbed()
 .addField(message.author.ping);
     message.delete().catch(O_o=>{});
 message.channel.send(embed)
     console.log(`${message.author.tag} השתמש בפקודת פינג!`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודה פינג!`);
}

//kick command - NEED FIX

 //say command
  if (cmd === `${prefix}תגיד` || cmd === `${prefix}say`){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if(!sayMessage) return message.channel.send(`${message.author} אתה צריך להגיד משהו!`)
    message.channel.send(sayMessage);
            console.log(`${message.author.tag} השתמש בפקודת חזור אחרי`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודה חזור אחרי`);
  }
 

//voldba

    if(cmd=== `${prefix}וולדבע` || cmd === `${prefix}voldba`){
      let embed = new Discord.RichEmbed()

    .setDescription("איסטראג וולדבעי במיוחד!")
    .addField("וולדבע נודר!", message.createdAt)
    .setColor('RANDOM')
   .setFooter("נוצר על ידי: avishaidv & NiceGames");
     message.delete().catch(O_o=>{});

    message.channel.send(embed);

    console.log(`${message.author.tag} השתמש בוולדבע!`);
    return logsCommands.send(`${message.author.tag} השתמש בוולדבע!!`);

    }


//server info
    if(cmd === `${prefix}שרת` || cmd === `${prefix}server`){
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("מידע השרת")
      .setColor("#75aaff")
      .setThumbnail(sicon)
      .addField("שם השרת", message.guild.name)
      .addField("תאריך הקמת השרת", message.guild.createdAt)
      .addField("תאריך כניסתך לשרת", message.member.joinedAt)
      .addField("מספר אנשים בשרת", message.guild.memberCount)
      .addField("ID", message.guild.id)
      .setFooter("נוצר על ידי: avishaidv & NiceGames");

          message.delete().catch(O_o=>{});

      return message.channel.send(serverembed);
         console.log(`${message.author.tag} השתמש בפקודה מידע על השרת!`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודה מידע על השרת!`);
    }
//simple test command
    if(cmd === `${prefix}שלום` ){
      message.delete().catch(O_o=>{});
      return message.channel.send("שלום לך!");
         console.log(`${message.author.tag} השתמש בפקודה שלום!`);
    return logsCommands.send(`${message.author.tag} שלח לי הודעה פרטית!`);
          }
//bot info
if(cmd === `${prefix}מיאני` || cmd === `${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("מידע על הבוט")
  .setColor("#2e34dd")
  .setThumbnail(bicon)
  .addField("שם הבוט", bot.user.username)
  .addField("תאריך יצור", bot.user.createdAt)
  .addField("ID", bot.user.id)
  .setFooter("נוצר על ידי: avishaidv & NiceGames");
 
      message.delete().catch(O_o=>{});
  return message.channel.send(botembed);
          console.log(`${message.author.tag} השתמש בפקודת מי אני!`);
    return logsCommands.send(`${message.author.tag} השתמש בפקודת מי אני!`);
}

  
  
});
bot.login(process.env.BOT_TOKEN);
