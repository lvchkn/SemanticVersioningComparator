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

test('compares semantic versions - positive scenario #4', () => {
    expect(semVerCompare("133.20", "133.2.4")).toBe(1);
});

// Negative scenarios: 

test('compares semantic versions - negative scenario #1', () => {
    expect(semVerCompare(undefined, "2.2")).toBe("One of the strings contains non-numeric symbols!");
});

test('compares semantic versions - negative scenario #2', () => {
    expect(semVerCompare(null, "2.2")).toBe("One of the strings contains non-numeric symbols!");
});

test('compares semantic versions - negative scenario #3', () => {
    expect(semVerCompare("", "2.2")).toBe("One of the strings is empty!");
});

test('compares semantic versions - negative scenario #3', () => {
    expect(semVerCompare("3", "")).toBe("One of the strings is empty!");
});

test('compares semantic versions - negative scenario #3', () => {
    expect(semVerCompare("", "")).toBe("One of the strings is empty!");
});

test('compares semantic versions - negative scenario #4', () => {
    expect(semVerCompare("wrawrawra", "2.2")).toBe("One of the strings contains non-numeric symbols!");
});

test('compares semantic versions - negative scenario #4', () => {
    expect(semVerCompare("wrawrawra", undefined)).toBe("One of the strings contains non-numeric symbols!");
});