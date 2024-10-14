const balls = 30;
const share = 5;

function recursiveMultiply(ballCount) {
    const ballCountBigInt = BigInt(ballCount);
    if (ballCountBigInt === 0n || ballCountBigInt === 1n) return 1n;
    return ballCountBigInt * recursiveMultiply(ballCountBigInt - 1n);
}

function solution(balls, share) {
    // condition
    if (balls < 1 || balls > 30) return;
    if (share < 1 || share > 30) return;

    const bigBalls = BigInt(balls);
    const bigShare = BigInt(share);

    return recursiveMultiply(bigBalls) / (recursiveMultiply(bigBalls - bigShare) * recursiveMultiply(bigShare));
}

solution(balls, share);