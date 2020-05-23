var util_scramble = require("./src/lib/utilscramble");
var scramble_444 =  require("./src/lib/scramble_444");
var megaScrambler = require("./src/lib/megascramble");
var scramble_333 = require("./src/lib/scramble_333_edit");
var clock = require("./src/lib/clockcs")

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
		return scramble_333.getRandomScramble()
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
		return scramble_333.getFMCScramble()
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
		return megaScrambler.get555WCAScramble(60)
	},

	fivebld: function () {
		var rotation1 = randomElement(["3Rw", "3Rw2", "3Rw'"])
		var rotation2 = randomElement(["3Fw", "3Fw2", "3Fw'"])
		var rotation3 = randomElement(["3Uw", "3Uw2", "3Uw'"])
		var whatRotation = Math.floor(Math.random()*5)
		if(whatRotation == 0) {
			return megaScrambler.get555WCAScramble(60) + " " + rotation1 + " " + rotation3
		} else if(whatRotation == 1) {
			return megaScrambler.get555WCAScramble(60) + " " + rotation2 + " " + rotation3
		} else if(whatRotation == 2) {
			return megaScrambler.get555WCAScramble(60) + " " + rotation1
		} else if(whatRotation == 3) {
			return megaScrambler.get555WCAScramble(60) + " " + rotation2
		} else if(whatRotation == 4) {
			return megaScrambler.get555WCAScramble(60) + " " + rotation3
		}
	},

	sixx: function () {
		return megaScrambler.get666WCAScramble(80)
	},

	sevenx: function () {
		return megaScrambler.get777WCAScramble(100)
	},

	clockx: function () {
		return clock.getScramble()
	},

	megax: function () {
		return util_scramble.getMegaminxWCAScramble(70)
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
