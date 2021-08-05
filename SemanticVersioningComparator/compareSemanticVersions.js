var SemVerCompare = function (leftOp, rightOp) {
    var res = leftOp.localeCompare(rightOp, undefined, { numeric: true });
    return res > 0 ? 1 : res < 0 ? -1 : 0;
};
console.log(SemVerCompare("3.0", "2.2"));
module.exports = SemVerCompare;
