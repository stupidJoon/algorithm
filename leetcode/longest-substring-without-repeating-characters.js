/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s === '') return 0;
    let max = 0;
    for (let i = 0; i < s.length; i += 1) {
        const map = {};
        for (let j = i; j < s.length; j += 1) {
            const ch = s[j];
            if (map[ch]) break;
            map[ch] = 1;
            if (j - i + 1 > max) max = j - i + 1;
        }
    }
    return max
};