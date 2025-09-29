const my_string = "cvsgiorszzzmrpaqpe";
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

const solution = (my_string, index_list) => index_list.map(i => my_string[i]).join('')

solution(my_string, index_list);