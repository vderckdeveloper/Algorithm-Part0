const keyinput = ["down", "down", "down", "down", "down"];
const board = [7, 9];

function solution(keyinput, board) {
    const widthLimit = Math.floor(board[0] / 2);
    const heightLimit = Math.floor(board[1] / 2);

    const initialLocation = [0, 0];

    let count = 0;
    while (count < keyinput.length) {
        direction = keyinput[count]

        switch (direction) {
            case 'up':
                if (Math.abs(initialLocation[1] + 1) <= Math.abs(heightLimit)) {
                    initialLocation[1] = initialLocation[1] + 1;
                }
                break;
            case 'down':
                if (Math.abs(initialLocation[1] - 1) <= Math.abs(heightLimit)) {
                    initialLocation[1] = initialLocation[1] - 1;
                }
                break;
            case 'right':
                if (Math.abs(initialLocation[0] + 1) <= Math.abs(widthLimit)) {
                    initialLocation[0] = initialLocation[0] + 1;
                }
                break;
            case 'left':
                if (Math.abs(initialLocation[0] - 1) <= Math.abs(widthLimit)) {
                    initialLocation[0] = initialLocation[0] - 1;
                }
                break;
        }

        count++;
    }

    return initialLocation;
}

solution(keyinput, board);