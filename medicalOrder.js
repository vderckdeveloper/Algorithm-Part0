const emergency = [3, 76, 24];

function solution(emergency) {
    const copiedArray = [...emergency];
    // arrange array
    emergency.sort((a, b) => a - b);

    // record ranking in map
    const rankMapped = new Map();

    // length
    const length = emergency.length;

    // map rank for each number to a map
    emergency.forEach((num, index) => {
        const rank = length - index;
        rankMapped.set(num, rank);
    });

    const answer = [];
    // rank each element
    for (let i = 0; i < copiedArray.length; i++) {
        const element = copiedArray[i];
        const rank = rankMapped.get(element);
        answer.push(rank);
    }
    
    return answer;
}

solution(emergency);