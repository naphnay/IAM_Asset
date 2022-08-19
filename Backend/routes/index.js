const express = require('express');
const assetController = require('../controller/assetController');
const assetService = require('../service/assetService');
const router = express.Router();


router.get('/:rcaId/assets',assetController.assetList);
router.post('/:rcaId/assets',assetController.createAsset);
router.put('/:rcaId/asset/:assetId',assetController.updateAsset);
router.delete('/:rcaId/deleteAsset/:assetId',assetController.deleteAsset);


module.exports = router;
