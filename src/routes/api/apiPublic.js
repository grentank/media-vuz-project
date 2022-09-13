import express from 'express';
import bcrypt from 'bcrypt';
import prepareSession from '../../utils/prepareSession';
import { User, Location } from '../../../db';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getAdmin();
  if ((await bcrypt.compare(password, user.hashedPassword)) && (email === user.email)) {
    req.session.user = prepareSession(user);
    return res.status(200).json(req.session.user);
  }
  return res.sendStatus(403);
});

router.get('/show/:inventory', async (req, res) => {
  const { inventory } = req.params;
  const oneLocation = (await Location.findOneInventory(inventory))
    || (await Location.findByUUID(inventory));
  if (oneLocation) {
    return res.json(oneLocation);
  }
  return res.sendStatus(404);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('m-v_ssid');
  res.sendStatus(200);
});

export default router;
