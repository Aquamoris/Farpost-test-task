const Router = require('express');
const router = new Router();
const bulletinController = require('../contoller/bulletin.controller');

router.post('/bulletin', bulletinController.createBulletin);
router.get('/bulletin', bulletinController.getAllBulletins);
router.get('/bulletin/:id', bulletinController.getBulletin);


module.exports = router;