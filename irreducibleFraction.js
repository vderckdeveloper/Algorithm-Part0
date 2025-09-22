const numer1 = 9;
const denom1 = 2;
const numer2 = 1;
const denom2 = 3;

// 최대공약수 구하는 함수 (유클리드 호제법)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// 기약분수 구하기
function simplifyFraction(numerator, denominator) {
    const divisor = gcd(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
}

function solution(numer1, denom1, numer2, denom2) {
    // 통분
    const numerator = numer1 * denom2 + numer2 * denom1;
    const denominator = denom1 * denom2;

    // 기약분수로 단순화
    return simplifyFraction(numerator, denominator);
}