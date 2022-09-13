import express from 'express';
import { Location } from '../../../db';

const router = express.Router();

router.get('/:inventory', async (req, res) => {
  const { inventory } = req.params;
  const oneLocation = (await Location.findOneInventory(inventory))
    || (await Location.findByUUID(inventory));
  const initState = { oneLocation };
  res.render('Layout', initState);
});

export default router;
