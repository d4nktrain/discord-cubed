import {megaScrambler} from "./src/ilovecstimer/megascramble";
import {util_scramble} from "./src/ilovecstimer/utilscramble";

const Scrambo = require("scrambo");
const cube = new Scrambo();

// http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function replaceAll(str,mapObj) {
	if (!mapObj)
		return str;
	var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

	return str.replace(re, function(matched){
		return mapObj[matched];
	});
}

function randomElement(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

function applyRotationForAlgorithm(alg, rot) {
	var mapObj;
	if (rot=="y")
		mapObj = {R:"F", r:"f", F:"L", f:"l", L:"B", l:"b", B:"R", b:"r"};
	if (rot=="y'")
		mapObj = {R:"B", r:"b", B:"L", b:"l", L:"F", l:"f", F:"R", f:"r"};
	if (rot=="y2")
		mapObj = {R:"L", r:"l", L:"R", l:"r", B:"F", b:"f", F:"B", f:"b"};

	return replaceAll(alg, mapObj);
}

module.exports = {
	/*
    start scramble function shits
    */

	twox: function () {
		return cube.type("222").length(10).get();
	},

	twobld: function () {
		return cube.type("222").length(10).get();
	},

	threex: function () {
		return cube.type("333").length(20).get();
	},

	threebld: function () {
		return cube.type("333").length(20).get();
	},

	fmc: function () {
		return "R' U' F " + cube.type("333").length(20).get() + " R' U' F"
	},

	fourx: function () {
		return megaScrambler.get444WCAScramble(40)
	},

	fourbld: function () {
		var rotation = randomElement(["", "y", "y2", "y'"]);
		return applyRotationForAlgorithm(megaScrambler.get444WCAScramble(40), rotation)
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
		var rotation = randomElement(["", "y", "y2", "y'"]);
		return applyRotationForAlgorithm(msgArr.join(" "), rotation);
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
