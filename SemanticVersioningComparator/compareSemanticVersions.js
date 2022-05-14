var SemVerCompare = function (leftOp, rightOp) {
    var regExp = /^[0-9,.]*$/;
    if (!regExp.test(leftOp) || !regExp.test(rightOp)) {
        return "One of the strings contains non-numeric symbols!";
    }
    if (leftOp.length === 0 || rightOp.length === 0) {
        return "One of the strings is empty!";
    }
    var res = leftOp.localeCompare(rightOp, undefined, { numeric: true });
    return res > 0 ? 1 : res < 0 ? -1 : 0;
};
module.exports = SemVerCompare;
