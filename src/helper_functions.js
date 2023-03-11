const createEmptyMatrix = (size) => {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = undefined;
        }
    }

    return matrix;
};
export const arrToTable = (arr, size) => {
    const table = new Array(size);

    for (let i = 0; i < size; i++) {
        table[i] = arr.slice(i * size, (i + 1) * size);
    }

    return table;
};

export const sizeOfTableFromArr = (arr) => Math.sqrt(arr.length);

//Valid table should have NxN size
export const isArrValidTable = (arr) => arr.length > 0 && Number.isInteger(sizeOfTableFromArr(arr));

export const rotateTable = (table) => {
    const center = (table.length - 1) / 2;
    const rotatedTable = createEmptyMatrix(table.length);

    for (let i = 0; i < table.length; i++) {
        const di = i - center;

        for (let j = 0; j < table[i].length; j++) {
            const dj = j - center;
            const circle = Math.max(Math.abs(di), Math.abs(dj));
            let [n, m] = [i, j];

            // if there is a singular field in the middle of the table, it is not moved.
            if (circle !== 0) {
                if (di === -circle && dj !== circle) {
                    //MOVE RIGHT
                    m++;
                } else if (dj === -circle) {
                    //MOVE TOP
                    n--;
                } else if (di === circle) {
                    //MOVE LEFT
                    m--;
                } else {
                    //MOVE DOWN
                    n++;
                }
            }
            rotatedTable[n][m] = table[i][j];
        }
    }

    return rotatedTable;
};
