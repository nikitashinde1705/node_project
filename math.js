function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

// second way to export module
exports.mul = (a,b) => a * b;

module.exports = {add, sub};