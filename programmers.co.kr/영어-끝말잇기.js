function solution(n, words) {
    const m = { [words[0]]: true };
    let lastWord = words[0];
    for (let i = 1; i < words.length; i += 1) {
        const word = words[i];
        if (m[word] || lastWord[lastWord.length - 1] !== word[0]) return [i % n + 1, Math.floor(i / n) + 1];
        m[word] = true;
        lastWord = word;
    }
    return [0, 0];
}