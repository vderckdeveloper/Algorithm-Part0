const chicken = 100;

const solution = chicken => {
    let service = 0;

    let count = chicken;
    while (count >= 10) {
        const newChicken = Math.floor(count / 10);
        service += newChicken;
        count = newChicken + (count % 10);
    }

    return service;
}

solution(chicken);