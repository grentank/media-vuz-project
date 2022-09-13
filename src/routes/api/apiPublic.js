import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import prepareSession from '../../utils/prepareSession';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = JSON.parse(await readFileSync(path.resolve(__dirname, '../../../db/user.txt'), 'utf-8'));
  if ((await bcrypt.compare(password, user.hashedPassword)) && (email === user.email)) {
    req.session.user = prepareSession(user);
    return res.status(200).json(req.session.user);
  }
  return res.sendStatus(403);
});

export default router;
