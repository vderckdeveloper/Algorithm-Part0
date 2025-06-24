const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];

const finished = [true, false, true, false];

const solution = (todo_list, finished) => todo_list.filter((_, i) => !finished[i]);