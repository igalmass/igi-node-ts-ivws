import longestPalindrome from "./leet-5-longest-polindrom";

test('long palyndrom', () => {
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('aa')).toBe('aa');
    expect(longestPalindrome('ab')).toBe('a');
    expect(longestPalindrome('aba')).toBe('aba');
    expect(longestPalindrome('caba')).toBe('aba');
    expect(longestPalindrome('cabac')).toBe('cabac');

    expect(longestPalindrome('dddd')).toBe('dddd');
    expect(longestPalindrome('dddda')).toBe('dddd');
    expect(longestPalindrome('badddda')).toBe('adddda');

})