function solution(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = people.length - 1;
    while (left <= right) {
        const l = people[left];
        const r = people[right];
        if (l + r <= limit) {
            left += 1;
            right -= 1;
        }
        else {
            right -= 1;
        }
        count += 1;
    }
    return count;
}