const Router = require('express');
const router = new Router();
const bulletinController = require('../contoller/bulletin.controller');

router.post('/bulletin', bulletinController.createBulletin);
router.get('/bulletin', bulletinController.getAllBulletins);
router.get('/bulletin/:id', bulletinController.getBulletin);

router.post('/approvedBulletins', bulletinController.postApprovedBulletins);
router.post('/declinedBulletins', bulletinController.postDeclinedBulletins);
router.post('/escalatedBulletins', bulletinController.postEscalatedBulletins);


module.exports = router;