const semVerCompare = require('./compareSemanticVersions');

// Positive scenarios:  

test('compares semantic versions - positive scenario #1', () => {
    expect(semVerCompare("1.3.5", "1.4.7.124")).toBe(-1);
});

test('compares semantic versions - positive scenario #2', () => {
    expect(semVerCompare("4.3.5", "4.3.05.124")).toBe(-1);
});

test('compares semantic versions - positive scenario #3', () => {
    expect(semVerCompare("0.2001.199.14", "0.2001.199.14")).toBe(0);
});

test('compares semantic versions - positive scenario #3', () => {
    expect(semVerCompare("133.20", "133.2.4")).toBe(1);
});

