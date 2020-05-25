const Discord = require("discord.js")

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + "/../suggestions.json")
const db = low(adapter)

module.exports.run = async (bot, message, args) => {
    if(!args[0] || args[0] == "help") {
		return message.channel.send(new Discord.RichEmbed()
			.setTitle("Send suggestions to the dev (danktrain#0001)")
			.setColor("RANDOM")
			.setDescription("Usage: \`s!suggest <suggestion>\`, \`s!suggest view\`, or \`s!suggest view <tag>\`"))
    }

    let suggestionsArray = db.get('suggestions').value()

    if(args[0] === "view") {
        args.shift()

        let embed = new Discord.RichEmbed()
        if(args.join(" ")) {
            embed.setTitle(args.join(" ") + "'s suggestions")
            for(let i = 0; i < suggestionsArray.length; i++) {
                if(suggestionsArray[i].person === args.join(" ")) {
                    if(suggestionsArray[i].status) {
                        embed.addField(suggestionsArray[i].suggestion, suggestionsArray[i].status)
                    } else {
                        embed.addField(suggestionsArray[i].suggestion, "Hasn't been reviewed yet")
                    }
                }
            }
            message.channel.send(embed)
        } else {
            embed.setTitle("Your suggestions")
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
                message.channel.send(embed)
            })
        }
        return
    }
    if((args[0] === "viewall") && message.author.id === "182620322846081024") {
        var i,j,temparray,chunk = 25;
        for (i=0,j=suggestionsArray.length; i<j; i+=chunk) {
            let embed = new Discord.RichEmbed();
            temparray = suggestionsArray.slice(i,i+chunk);
            for(let k = 0; k < temparray.length; k++) {
                if (!(temparray[k].status === "done!")) {
                    if (temparray[k].status) {
                        if (!temparray[k].status.includes("denied")) embed.addField(temparray[k].person, temparray[k].suggestion)
                    } else {
                        embed.addField(temparray[k].person, temparray[k].suggestion)
                    }
                }
            }
            message.channel.send(embed)
        }
        return
    }
    if((args[0] === "viewdone") && message.author.id === "182620322846081024") {
        var i,j,temparray,chunk = 25;
        for (i=0,j=suggestionsArray.length; i<j; i+=chunk) {
            let embed = new Discord.RichEmbed();
            temparray = suggestionsArray.slice(i,i+chunk);
            for(let k = 0; k < temparray.length; k++) {
                if (temparray[k].status === "done!") {
                    embed.addField(temparray[k].person, temparray[k].suggestion)
                }
            }
            message.channel.send(embed)
        }
        return
    }
    if((args[0] === "del") && message.author.id === "182620322846081024") {
        message.channel.fetchMessages().then(async messages => {
            for (const msg of messages.array()) {
                if(msg.author.bot && !msg.content.includes("Successfully set status!")) msg.delete()
                else if(msg.author.id === "182620322846081024" && !msg.content.includes("suggest status")) msg.delete()
            }
        })
        return
    }
    if((args[0] === "status") && message.author.id === "182620322846081024") {
        suggestionsArray = db.get('suggestions')

        args.shift()

        let suggestion = args.join(" ").split("|")[0]

        let statusIn = args.join(" ").split("|")[1]

        suggestionsArray.find({suggestion: suggestion}).value().status = statusIn

        db.write()

        return message.channel.send("Successfully set status!")
    }
    let suggestion = args.join(" ")
    if((suggestion.indexOf("1x1") != -1) || (suggestion.indexOf("0x0") != -1) || (suggestion.indexOf("your idea") != -1)) return message.channel.send("no. it could've been funny the first time someone said it, and it still wasn't. stop.")
    bot.fetchUser(message.author.id).then(user => {
        suggestionsArray.push({"id": (db.get("suggestions").value().length), "suggestion": suggestion, "person": user.tag})
        db.write()
    })
    console.log("Wrote " + suggestion + " as a suggestion")
    return message.channel.send("Wrote " + suggestion + " as a suggestion! If you want to see the status of your suggestion, do " + message.content.split(" ")[0] + " view")
}
module.exports.config = { name: "suggest", aliases: ["suggestion, suggestions"] }