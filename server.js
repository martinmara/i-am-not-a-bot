let Discord = require("discord.js");
let client = new Discord.Client();



client.on("message", message => {

if (message.content === "meme") {

message.channel.send("https://cdn.glitch.com/ff9bab07-1616-4ce1-af19-720d30e75b3a%2F3zlqxf_copy.0.jpg?v=1631534117702").random

}

if(message.content === "embed") {

 let embed = new Discord.MessageEmbed()

 .setTitle("")

 .setDescription("")

 .setColor("")

 .setFooter("")

 message.channel.send(embed)

}

})



client.login("ODg2ODc5MDYyOTA2MjQ5MjI2.YT8Afg.4KwDJ_eOW46j9xpS7NPdRcMXRWE")
