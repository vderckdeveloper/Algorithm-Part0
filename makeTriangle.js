const sides = [11 ,7];

const solution = sides => {
    const [a, b] = sides;
    const longer = Math.max(a, b);
    const shorter = Math.min(a, b);

    const count1 = shorter;

    const count2 = (a + b - 1) - longer;

    console.log(count1, count2);

    return count1 + count2;
}

solution(sides);