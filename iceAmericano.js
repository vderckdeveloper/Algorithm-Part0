const money = 5500;

function solution(money) {
    let moneyLeft = money;

    let count = 0;
    while (true) {
        if (moneyLeft < 5500) break;
        moneyLeft -= 5500;
        count++;
    }
    return [count, moneyLeft];
}