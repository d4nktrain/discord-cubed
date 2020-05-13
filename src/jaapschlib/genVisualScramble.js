var threeByThree = function threeByThree(indent, emojiArray) {
    return `
    ${indent}${emojiArray[0]}${emojiArray[1]}${emojiArray[2]}
    ${indent}${emojiArray[3]}${emojiArray[4]}${emojiArray[5]}
    ${indent}${emojiArray[6]}${emojiArray[7]}${emojiArray[8]}
    ${emojiArray[9]}${emojiArray[10]}${emojiArray[11]} ${emojiArray[12]}${emojiArray[13]}${emojiArray[14]} ${emojiArray[15]}${emojiArray[16]}${emojiArray[17]} ${emojiArray[18]}${emojiArray[19]}${emojiArray[20]}
    ${emojiArray[21]}${emojiArray[22]}${emojiArray[23]} ${emojiArray[24]}${emojiArray[25]}${emojiArray[26]} ${emojiArray[27]}${emojiArray[28]}${emojiArray[29]} ${emojiArray[30]}${emojiArray[31]}${emojiArray[32]}
    ${emojiArray[33]}${emojiArray[34]}${emojiArray[35]} ${emojiArray[36]}${emojiArray[37]}${emojiArray[38]} ${emojiArray[39]}${emojiArray[40]}${emojiArray[41]} ${emojiArray[42]}${emojiArray[43]}${emojiArray[44]}
    ${indent}${emojiArray[45]}${emojiArray[46]}${emojiArray[47]}
    ${indent}${emojiArray[48]}${emojiArray[49]}${emojiArray[50]}
    ${indent}${emojiArray[48]}${emojiArray[49]}${emojiArray[50]}`
}

var fourByFour = function fourByFour(indent, emojiArray) {
    return 	`
    ${indent}${emojiArray[0]}${emojiArray[1]}${emojiArray[2]}${emojiArray[3]}
    ${indent}${emojiArray[4]}${emojiArray[5]}${emojiArray[6]}${emojiArray[7]}
    ${indent}${emojiArray[8]}${emojiArray[9]}${emojiArray[10]}${emojiArray[11]}
    ${indent}${emojiArray[12]}${emojiArray[13]}${emojiArray[14]}${emojiArray[15]}
    ${emojiArray[16]}${emojiArray[17]}${emojiArray[18]}${emojiArray[19]} ${emojiArray[20]}${emojiArray[21]}${emojiArray[22]}${emojiArray[23]} ${emojiArray[24]}${emojiArray[25]}${emojiArray[26]}${emojiArray[27]} ${emojiArray[28]}${emojiArray[29]}${emojiArray[30]}${emojiArray[31]}
    ${emojiArray[32]}${emojiArray[33]}${emojiArray[34]}${emojiArray[35]} ${emojiArray[36]}${emojiArray[37]}${emojiArray[38]}${emojiArray[39]} ${emojiArray[40]}${emojiArray[41]}${emojiArray[42]}${emojiArray[43]} ${emojiArray[44]}${emojiArray[45]}${emojiArray[46]}${emojiArray[47]}
    ${emojiArray[48]}${emojiArray[49]}${emojiArray[50]}${emojiArray[51]} ${emojiArray[52]}${emojiArray[53]}${emojiArray[54]}${emojiArray[55]} ${emojiArray[56]}${emojiArray[57]}${emojiArray[58]}${emojiArray[59]} ${emojiArray[60]}${emojiArray[61]}${emojiArray[62]}${emojiArray[63]}
    ${emojiArray[64]}${emojiArray[65]}${emojiArray[66]}${emojiArray[67]} ${emojiArray[68]}${emojiArray[69]}${emojiArray[70]}${emojiArray[71]} ${emojiArray[72]}${emojiArray[73]}${emojiArray[74]}${emojiArray[75]} ${emojiArray[76]}${emojiArray[77]}${emojiArray[78]}${emojiArray[79]}
    ${indent}${emojiArray[80]}${emojiArray[81]}${emojiArray[82]}${emojiArray[83]}
    ${indent}${emojiArray[84]}${emojiArray[85]}${emojiArray[86]}${emojiArray[87]}
    ${indent}${emojiArray[88]}${emojiArray[89]}${emojiArray[90]}${emojiArray[91]}
    ${indent}${emojiArray[92]}${emojiArray[93]}${emojiArray[94]}${emojiArray[95]}`
}

export {threeByThree, fourByFour}