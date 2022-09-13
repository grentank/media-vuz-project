import fs from 'fs/promises';
import path from 'path';
import { v4 } from 'uuid';
import { read } from 'xlsx/xlsx';

const User = {
  getAdmin: async () => JSON.parse(await fs.readFile(path.resolve(__dirname, './user.txt'), 'utf-8')),
};

const Location = {
  findAll: async () => JSON.parse(await fs.readFile(path.resolve(__dirname, './parsing/jsonData.txt'), 'utf-8')),
  parseFileAndWrite: async () => {
    const buf = await fs.readFile(path.resolve(__dirname, './parsing/data.xlsx'));
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
      });
    }
    return fs.writeFile(path.resolve(__dirname, './parsing/jsonData.txt'), JSON.stringify(array), 'utf-8');
  },
  writeAll: (array) => fs.writeFile(path.resolve(__dirname, './parsing/jsonData.txt'), JSON.stringify(array)),
  async findOneInventory(inv) {
    return (await this.findAll()).find((el) => el.inventory === inv);
  },
  async findByUUID(id) {
    return (await this.findAll()).find((el) => el.id === id);
  },
};

export { User, Location };
