const solution = num_list => {
    const result = [...num_list];
    num_list[num_list.length -1] > num_list[num_list.length -2] ? result.push(num_list[num_list.length -1] - num_list[num_list.length -2]) : result.push(num_list[num_list.length -1] * 2);
    return result;
} 
