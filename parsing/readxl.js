// const fs = require('fs/promises');

// const read = async () => {
//   const data = await fs.readFile('./data.xlsx', 'utf-8');
//   console.log(data);
// };
// read();

import { readFileSync, writeFileSync } from 'fs';
import { read } from 'xlsx/xlsx.js';

const buf = readFileSync('data.xlsx');
/* buf is a Buffer */
const workbook = read(buf);
const cells = workbook.Sheets['ВУЗы'];
const array = [];
for (let i = 5; i <= 119; i += 1) {
  array.push({
    vuz: cells[`A${i}`].v,
    adress: cells[`B${i}`].v,
    size: cells[`C${i}`].v,
    location: cells[`D${i}`].v,
    inventory: cells[`E${i}`].v,
  });
}

writeFileSync('jsonData.txt', JSON.stringify(array), 'utf-8');
