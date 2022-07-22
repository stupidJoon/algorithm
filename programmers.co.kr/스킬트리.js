function solution(skill, skill_trees) {
    const skillArr = skill.split('');
    let count = 0;
    for (let i = 0; i < skill_trees.length; i += 1) {
        const skillTree = skill_trees[i];
        const extracted = skillTree.split('').filter((v) => skillArr.includes(v)).join('');
        const isContain = (new RegExp('^' + extracted)).test(skill);
        count += Number(isContain);
    }
    return count;
}