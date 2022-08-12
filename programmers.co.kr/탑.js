function solution(heights) {
    return heights.map((value, index) => {
        let rx = 0;
        for (let i = index - 1; i >= 0; i -= 1) {
            if (heights[i] > value) {
                rx = i + 1;
                break;
            }
        }
        return rx;
    });
}