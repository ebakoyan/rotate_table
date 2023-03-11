import {
    isArrValidTable,
    arrToTable,
    rotateTable,
    sizeOfTableFromArr,
} from './helper_functions.js';

export const readRow = (row, writeCsv) => {
    const { id, json } = row;
    const arr = JSON.parse(json);
    const output = { id };

    const isValid = isArrValidTable(arr);
    if (isValid) {
        const table = arrToTable(arr, sizeOfTableFromArr(arr));
        const rotated = rotateTable(table);

        output.json = JSON.stringify(rotated.flat());
        output.is_valid = JSON.stringify(true);
    } else {
        output.json = JSON.stringify([]);
        output.is_valid = JSON.stringify(false);
    }

    writeCsv.write(Object.values(output));
};
