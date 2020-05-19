var algebra = require("algebra.js")
var Equation = algebra.Equation

module.exports.run = async (bot, message, args) => {
    let equation = args.join(" ").split("=")

    var part1 = algebra.parse(equation[0])
    var part2 = algebra.parse(equation[1])

    var eq = new Equation(part1, part2);
    var answer = eq.solveFor("x");

    return message.channel.send("x = " + answer.toString())
}

module.exports.config = { name: "solvex", aliases: [""] };