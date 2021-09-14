let Discord = require("discord.js");
let Client = new Discord.Client();



Client.on("message", message => {

if (message.content === "ping") {

message.channel.send("pong")

}

})



Client.login("")
