const array = [1, 2, 3, 3, 3, 4];

// record number frequency
const recordNumberFrequency = array => {
    const number = {};

    // insert all the number
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        if (number[arrayElement]) number[arrayElement] = number[arrayElement] + 1;
        else number[arrayElement] = 1;
    }

    return number;
}

// calculate the most frequent number
const calculateTheMostFrequentNumber = number => {
    const list = [];
    // check frequency
    for (num in number) {
        const value = number[num];
        list.push({ num, value });
    }

    list.sort((a, b) => b.value - a.value);

    if (list[1] && list[0].value === list[1].value) return -1;

    return parseInt(list[0].num);
}

const solution = array => {
    // record number frequency
    const number = recordNumberFrequency(array);

    return calculateTheMostFrequentNumber(number);
}

solution(array);