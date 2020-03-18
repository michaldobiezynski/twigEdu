const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const chunk = require('../arraysManipulations');

//@route    POST /arrays/divide
//@desc     Add a divide an array into N chunks
//@access   Public
router.post(
  '/divide',
  [
    check('array', 'You have not passed an array.').isArray(),
    check(
      'chunkSize',
      'You need to provide an integer greater than 0 for chunkSize.',
    ).isInt({ gt: 0 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { array, chunkSize } = req.body;

    const result = chunk(array, chunkSize);

    res.send(result);
  },
);

module.exports = router;
