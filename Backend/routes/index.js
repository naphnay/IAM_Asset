const express = require('express');
const assetController = require('../controller/assetController');
const assetService = require('../service/assetService');
const router = express.Router();

router.get('/assets',assetController.assetList);
router.post('/asset/:rcaId',assetController.createAsset);
router.put('/editAsset/:assetId',assetController.updateAsset);
router.delete('/deleteAsset/:assetId',assetController.deleteAsset);


module.exports = router;
