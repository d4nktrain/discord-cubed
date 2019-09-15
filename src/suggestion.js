const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if(!args[0] || args[0] == "help") {
		return message.channel.send(new Discord.RichEmbed()
			.setTitle("Send suggestions to TheUPSTruck")
			.setColor("RANDOM")
			.setDescription("Usage: \`s!suggest <suggestion>\`"))
    }
    let suggestion = args.join(" ")
    let file = fs.readFileSync(__dirname + '/../suggestions.json');
    if(file.indexOf(suggestion) != -1) return message.channel.send("Someone has already suggested that!")
    fs.writeFileSync(__dirname + '/../suggestions.json', file + "\n" + suggestion + " by: " + message.guild.members.get(message.author.id).displayName) 
    console.log("Wrote " + suggestion + " as a suggestion")
    return message.channel.send("Wrote " + suggestion + " as a suggestion!")
}
module.exports.config = { name: "suggest", aliases: ["suggestion, suggestions"] };
