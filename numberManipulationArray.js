const solution = (numLog) => {
    const answer = [];
    for (let i = 0; i <= numLog.length; i++) {
        switch (numLog[i + 1]) {
            case numLog[i] + 1: answer.push('w');
                break;
            case numLog[i] - 1: answer.push('s');
                break;
            case numLog[i] + 10: answer.push('d');
                break;
            case numLog[i] - 10: answer.push('a');
                break;
        }
    }
    return answer.join('');
}