const n = 15;

const solution = n => {
    let count = 0;   // n번째를 찾기 위한 카운트
    let num = 0;     // 실제 숫자

    while (count < n) {
        num++;
        // 3의 배수거나 '3'이 포함된 숫자는 제외
        if (num % 3 === 0 || String(num).includes('3')) continue;
        count++;
    }

    return num;
};

solution(n);