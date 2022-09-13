import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const jsonSheet = readFileSync(path.resolve(__dirname, '../../../db/parsing/jsonData.txt'), 'utf-8');
  const initState = { jsonSheet: JSON.parse(jsonSheet) };
  res.render('Layout', initState);
});

router.get('/format', (req, res) => {
  res.render('Layout');
});

router.get('/contacts', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

export default router;
