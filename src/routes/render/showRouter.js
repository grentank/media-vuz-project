import express from 'express';

const router = express.Router();

router.get('/:inventory', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default router;
