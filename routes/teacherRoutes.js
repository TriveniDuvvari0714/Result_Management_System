var express = require('express');
const router = express.Router();
const teachController = require('../controllers/teacherController');

router.get('/login',teachController.teachLogin_get);
router.post('/login',teachController.teachLogin_post);
router.get('/viewall',teachController.teachViewall_get);
router.get('/edit/:id',teachController.teachEdit_get);
router.post('/edit/:id',teachController.teachEdit_post);
router.get('/delete/:id',teachController.teachDelete_get);
router.get('/option',teachController.teachOptions_get);
router.post('/add',teachController.teachAdd_post);
router.get('/add',teachController.teachAdd_get);

module.exports = router
