const my_string = 'ABBAA';
const pat = 'AABB';

const solution = (my_string, pat) => {
    let answer = '';
    for(let element of my_string) {
        element = element === 'A' ? 'B' : 'A';
        answer += element;
    }
    return answer.includes(pat) ? 1 : 0;
}