import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const jsonSheet = readFileSync(path.resolve(__dirname, '../../parsing/jsonData.txt'), 'utf-8');
  const initState = { jsonSheet: JSON.parse(jsonSheet) };
  res.layout(initState);
});

export default router;
