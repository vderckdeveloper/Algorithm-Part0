
function solution(order) {
    const orderStr = order.toString();

    let count = 0;
    for (let i = 0; i < orderStr.length; i++) {
        const char = orderStr[i];
        if (char === '3' || char === '6' || char === '9') count++;
    }

    return count;
}