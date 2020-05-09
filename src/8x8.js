module.exports.run = async (bot, message, args) => {
    let msgArr = [];
    let scrambles = parseInt(args[0]);
    scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1;
    for(var i = 0; i < scrambles; i++) {
        let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw", "3Rw", "3Uw", "3Lw", "3Dw", "3Fw", "3Bw", "4Rw", "4Uw", "4Lw", "4Dw", "4Fw", "4Bw"];
        let nonWides = ["R", "U", "L", "D", "F", "B"];
        let scramble = [];
        let i = 0;
        while(scramble.length < 120) {
            let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
            if(i > 0 && (scramble[i - 1] === move)) {
                continue;
            } else {
                scramble.push(move);
                i++;
            }
        }
        msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
    }
    for(var i = 0; i < msgArr.length; i++) {msgArr[i] = (i+1) + ". " + msgArr[i]}; return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "8x8", aliases: ["8x8x8", "8"] };