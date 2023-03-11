#!/usr/bin/env node

import { createReadStream, createWriteStream } from 'fs';
import * as csv from 'fast-csv';

import { readRow } from './src/main.js';

const csvStream = csv.format({ headers: ['id', 'json', 'is_valid'] });
csvStream.pipe(createWriteStream('./output.csv'));

const inputFileName = process.argv[2];
createReadStream(`./${inputFileName}`)
    .pipe(csv.parse({ headers: true }))
    .on('data', (row) => readRow(row, csvStream))
    .on('end', () => csvStream.end())
    .on('error', (error) => console.error(error));
