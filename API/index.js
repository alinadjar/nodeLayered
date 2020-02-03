const express = require('express');
const router = express.Router();




router.use('/v1', require('./V1/index'));
router.use('/v2', require('./V2/index'));
router.use('/', require('./V2/index'));

// Now:
// go Check the file: versioning2.js
// > node versioning2.js




module.exports = router;