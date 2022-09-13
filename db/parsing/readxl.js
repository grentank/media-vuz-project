// const fs = require('fs/promises');

// const read = async () => {
//   const data = await fs.readFile('./data.xlsx', 'utf-8');
//   console.log(data);
// };
// read();
import { v4 } from 'uuid';
import { readFileSync, writeFileSync } from 'fs';
import { read } from 'xlsx/xlsx';
import path from 'path';

const buf = readFileSync(path.resolve(__dirname, './data.xlsx'));
const workbook = read(buf);
const cells = workbook.Sheets['ВУЗы'];
const array = [];
for (let i = 5; i <= 119; i += 1) {
  array.push({
    id: v4(),
    vuz: cells[`A${i}`].v,
    adress: cells[`B${i}`].v,
    size: cells[`C${i}`].v,
    location: cells[`D${i}`].v,
    inventory: cells[`E${i}`].v,
    oldInventory: cells[`E${i}`].v,
    img: '',
  });
}

writeFileSync(path.resolve(__dirname, './jsonData.txt'), JSON.stringify(array), 'utf-8');
