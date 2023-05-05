function solution(users, emoticons) {
    let result = [0, 0];
    
    f([]);
    
    return result;
    
    function f(arr) {
        if (arr.length === emoticons.length) {
            let emojiPlusSubs = 0;
            let userSum = 0;
            
            for (const [ratio, threshold] of users) {
                const sum = emoticons
                    .map((price, i) => price * (100 - arr[i]) * 0.01)
                    .filter((_, i) => arr[i] >= ratio)
                    .reduce((acc, price) => acc + price, 0);
                if (sum >= threshold) emojiPlusSubs += 1;
                else userSum += sum;
            }
            
            if (
                emojiPlusSubs > result[0] ||
                emojiPlusSubs === result[0] &&
                userSum > result[1]
            ) {
                result = [emojiPlusSubs, userSum];
            }
            return;
        }

        for (const ratio of [10, 20, 30, 40]) {
            f([...arr, ratio]);
        }
    }
}
