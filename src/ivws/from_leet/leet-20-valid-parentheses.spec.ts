import isValidParenthesis from "./leet-20-valid-parentheses";

test('valid parentheses', () => {
    expect(isValidParenthesis('[]')).toBe(true);
    expect(isValidParenthesis('[]{}[]{}()')).toBe(true);
    expect(isValidParenthesis('[]{}[]{}()[')).toBe(false);
})