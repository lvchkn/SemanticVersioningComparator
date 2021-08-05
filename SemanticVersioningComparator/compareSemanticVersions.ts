type LeftOpIsBigger = 1;
type RightOpIsBigger = -1;
type BothOpsAreEqual = 0;
type SemVerResult = LeftOpIsBigger | RightOpIsBigger | BothOpsAreEqual;

const SemVerCompare = (leftOp: string, rightOp: string): SemVerResult => {
    const res = leftOp.localeCompare(rightOp, undefined, { numeric: true });
    return res > 0 ? 1 : res < 0 ? -1 : 0;
};

console.log(SemVerCompare("3.0", "2.2"))

module.exports = SemVerCompare;