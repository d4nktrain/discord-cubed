const Discord = require("discord.js")
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
    if(!args[0] || args[0] == "help") {
		return message.channel.send(new Discord.RichEmbed()
			.setTitle("Send suggestions to the dev (danktrain#0001)")
			.setColor("RANDOM")
			.setDescription("Usage: \`s!suggest <suggestion>\` or \`s!suggest view\`"))
    }
    if(args[0] === "view") {
        return message.channel.send("```" + fs.readFileSync(__dirname + '/../suggestions.json') + "```")
    }
    let suggestion = args.join(" ")
    if(suggestion.indexOf("1x1") != -1) return message.channel.send("no. it could've been funny the first time someone said it, and it still wasn't. stop.")
    let file = fs.readFileSync(__dirname + '/../suggestions.json')
    bot.fetchUser(message.author.id).then(user => {
        fs.writeFileSync(__dirname + '/../suggestions.json', file + "\n" + suggestion + " by: " + user.tag)
    })
    console.log("Wrote " + suggestion + " as a suggestion")
    return message.channel.send("Wrote " + suggestion + " as a suggestion!")
}
module.exports.config = { name: "suggest", aliases: ["suggestion, suggestions"] }