var express = require("express");
const router = express.Router();
const studController = require('../controllers/studentController');

router.get('/login',studController.studLogin_get);
router.post('/login',studController.studLogin_post);

module.exports = router;