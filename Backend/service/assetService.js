const assetDao = require('../dao/assetDao')
class assetService {

    assetList(){

        return assetDao.assetList();
    }

    createAsset(assetDto,rcaId){
        console.log("inside bug service");
        const {plant,processArea,asset} = assetDto;
        
        return assetDao.createAsset(rcaId,plant,processArea,asset);
    
    }

    async updateAsset(assetDetails){
      
        console.log( "in service   "+ assetDetails.plant);
        const {assetId,plant,processArea,asset} = assetDetails;
        return assetDao.updateAsset(assetId,plant,processArea,asset);
    }

    deleteAsset(assetId){
        
        return assetDao.deleteAsset(assetId);
    }
}   

module.exports = new assetService();