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
        let suggestionsArray = JSON.parse(fs.readFileSync(__dirname + '/../suggestions.json').toString())

        let embed = new Discord.RichEmbed().setTitle("Your suggestions")
        bot.fetchUser(message.author.id).then(user => {
            for(let i = 0; i < suggestionsArray.length; i++) {
                if(suggestionsArray[i].person === user.tag) {
                    if(suggestionsArray[i].status) {
                        embed.addField(suggestionsArray[i].suggestion, suggestionsArray[i].status)
                    } else {
                        embed.addField(suggestionsArray[i].suggestion, "Hasn't been reviewed yet")
                    }
                }
            }
            return message.channel.send(embed)
        })
        return
    }
    if((args[0] === "status") && message.author.id === "182620322846081024") {
        let suggestionsArray = JSON.parse(fs.readFileSync(__dirname + '/../suggestions.json').toString())

        args.shift()
        let statusIn = args.join(" ").split("|")[0]

        let suggestion = args.join(" ").split("|")[1]

        for(let i = 0; i < suggestionsArray.length; i++) {
            if(suggestionsArray[i].suggestion === suggestion) {
                suggestionsArray[i].status = statusIn
                fs.writeFileSync(__dirname + '/../suggestions.json', JSON.stringify(suggestionsArray))
                message.channel.send("Successfully set status!")
            }
        }
        return
    }
    let suggestion = args.join(" ")
    if((suggestion.indexOf("1x1") != -1) || (suggestion.indexOf("0x0") != -1) || (suggestion.indexOf("your idea") != -1)) return message.channel.send("no. it could've been funny the first time someone said it, and it still wasn't. stop.")
    let suggestionsArray = JSON.parse(fs.readFileSync(__dirname + '/../suggestions.json').toString())
    bot.fetchUser(message.author.id).then(user => {
        suggestionsArray.push({"suggestion": suggestion, "person": user.tag})
        fs.writeFileSync(__dirname + '/../suggestions.json', JSON.stringify(suggestionsArray))
    })
    console.log("Wrote " + suggestion + " as a suggestion")
    return message.channel.send("Wrote " + suggestion + " as a suggestion! If you want to see the status of your suggestion, do " + message.content.split(" ")[0] + " view")
}
module.exports.config = { name: "suggest", aliases: ["suggestion, suggestions"] }