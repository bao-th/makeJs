const {gData,tokenTypes} = require("./token");
const {errPrint} = require("../init/commons");

const {gVarMap} = gData;

function addVar(name) {
    gVarMap[name] = undefined;
}

function assignVal(name,val) {
    gVarMap[name] = val;
}

module.exports = {
    addVar,
    assignVal
}