const myStr = "baconlettucetomato";

const solution = myStr => {
    const result = myStr.replace(/[abc]/g, " ").split(" ").filter(el => el !== "")
    let answer = [];
    return answer = result.length !== 0 ? result : ["EMPTY"];
};

solution(myStr);