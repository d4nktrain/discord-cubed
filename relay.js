import {util_scramble} from "./src/ilovecstimer/utilscramble";
import {scramble_444} from "./src/ilovecstimer/scramble_444";

const Scrambo = require("scrambo");
const cube = new Scrambo();

function randomElement(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

module.exports = {
	/*
    start scramble function shits
    */

	twox: function () {
		return cube.type("222").length(10).get();
	},

	twobld: function () {
		var rotation1 = randomElement(["x", "x2", "x'"])
        var rotation2 = randomElement(["z", "z2", "z'"])
        var rotation3 = randomElement(["y", "y2", "y'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    return cube.type("222").length(10).get() + " " + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
		    return cube.type("222").length(10).get() + " " + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    return cube.type("222").length(10).get() + " " + rotation1
        } else if(whatRotation == 3) {
		    return cube.type("222").length(10).get() + " " + rotation2
        } else if(whatRotation == 4) {
		    return cube.type("222").length(10).get() + " " + rotation3
        }
	},

	threex: function () {
		return cube.type("333").length(20).get();
	},

	threebld: function () {
		var scramble = cube.type("333").length(20).get()

		var rotation1 = randomElement(["Rw", "Rw2", "Rw'"])
        var rotation2 = randomElement(["Fw", "Fw2", "Fw'"])
		var rotation3 = randomElement(["Uw", "Uw2", "Uw'"])
		
		var whatRotation = Math.floor(Math.random()*5)
		
        if(whatRotation == 0) {
			return scramble + " " + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
			return scramble + " " + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    return scramble + " " + rotation1
        } else if(whatRotation == 3) {
		    return scramble + " " + rotation2
        } else if(whatRotation == 4) {
		    return scramble + " " + rotation3
        }
	},

	fmc: function () {
		return "R' U' F " + cube.type("333").length(20).get() + " R' U' F"
	},

	fourx: function () {
		return scramble_444.getRandomScramble()
	},

	fourbld: function () {
		var rotation1 = randomElement(["x", "x2", "x'"])
        var rotation2 = randomElement(["z", "z2", "z'"])
        var rotation3 = randomElement(["y", "y2", "y'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    return scramble_444.getRandomScramble() + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
		    return scramble_444.getRandomScramble() + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    return scramble_444.getRandomScramble() + rotation1
        } else if(whatRotation == 3) {
		    return scramble_444.getRandomScramble() + rotation2
        } else if(whatRotation == 4) {
		    return scramble_444.getRandomScramble() + rotation3
        }
	},

	fivex: function () {
		let msgArr = [];
		let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 60) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
		return msgArr.join(" ");
	},

	fivebld: function () {
		let msgArr = [];
		let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 60) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));

		var rotation1 = randomElement(["3Rw", "3Rw2", "3Rw'"])
        var rotation2 = randomElement(["3Fw", "3Fw2", "3Fw'"])
        var rotation3 = randomElement(["3Uw", "3Uw2", "3Uw'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    return msgArr.join(" ") + " " + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
		    return msgArr.join(" ") + " " + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    return msgArr.join(" ") + " " + rotation1
        } else if(whatRotation == 3) {
		    return msgArr.join(" ") + " " + rotation2
        } else if(whatRotation == 4) {
		    return msgArr.join(" ") + " " + rotation3
        }
	},

	sixx: function () {
		let msgArr = [];
		let wides = ["Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 80) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
		return msgArr.join(" ");
	},

	sevenx: function () {
		let msgArr = [];
		let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw", "3Rw", "3Uw", "3Lw", "3Dw", "3Fw", "3Bw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 100) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
		return msgArr.join(" ");
	},

	clockx: function () {
		return util_scramble.getClockWCAScramble()
	},

	megax: function () {
		let msgArr = [];
		for(var i = 1, scramble = []; i < 78; i++) {
			if(i !== 1 && i % 11 === 0) {
				scramble[i - 2][2] === "-" ? scramble.push("U\'\n") : scramble.push("U\n");
			} else if(i === 1 || scramble[i - 2][0] === "D" || scramble[i - 2][0] === "U") {
				scramble.push(`R${Math.random() < 0.5 ? "++" : "--"}`);
			} else {
				scramble.push(`D${Math.random() < 0.5 ? "++" : "--"}`);
			}
		}
		msgArr.push(`${scramble.join(" ").replace(/U\n R/g, "U\nR").replace(/U'\n R/g, "U\'\nR")}\n`);
		return msgArr.join(" ");
	},

	pyrax: function () {
		return cube.type("pyram").get();
	},

	skewbx: function () {
		return cube.type("skewb").get();
	},

	squanx: function () {
		return cube.type("sq1").get();
	},

	x2x3: function () {
		let slices = ["R2", "R2", "R2", "R2", "F2"];
		let ud = ["U", "U\'", "U", "U\'", "U2", "D", "D\'", "D", "D\'", "D2"];
		let scramble = [];
		for(let i = 0; i < Math.round(Math.random() * (11 - 7) + 7); i++) {
			if(i % 2 == 0) {
				scramble.push(slices[Math.floor(Math.random() * slices.length)]);
			} else {
				scramble.push(ud[Math.floor(Math.random() * ud.length)]);
			}
		}
		return scramble.join(" ");
	}

	/*
    end scramble function shits
    */
};
