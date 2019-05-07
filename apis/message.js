import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  console.log('In Message API');
  res.json('Get Message');
});
export default router;
