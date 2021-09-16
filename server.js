let Discord = require("discord.js");
let Client = new Discord.Client();



Client.on("message", message => {

if (message.content === "ping") {

message.channel.send("pong")

}

})

Client.on("message", message => {

if (message.content === "meme") {

message.channel.send("https://www.google.com/search?q=meme&client=firefox-b-d&sxsrf=AOaemvKLqL72tJMLMWDAnt4nErnawrcsJA:1631799924988&tbm=isch&source=iu&ictx=1&fir=lLODzzlfHmoxSM%252C8LkjXcth-iXjoM%252C_&vet=1&usg=AI4_-kQcH3dkxYGk7sOpBaxM0j0E_HyfnA&sa=X&ved=2ahUKEwik5f220IPzAhUghf0HHfE9B_YQ9QF6BAgOEAE#imgrc=lLODzzlfHmoxSM")

}

})



Client.login("")
