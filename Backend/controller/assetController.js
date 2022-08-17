const assetService = require('../service/assetService');
class asestController{

    async assetList(req,res){
        try{
            const list = await assetService.assetList();
            res.status(201).json(list);
        }
        catch(err){
            console.log(err);
        }
    }

    async createAsset(req,res){
        try{
            console.log("inside  controller");
            console.log(req.params);
            console.log(req.body);
            const rcaid = await assetService.createAsset(req.body,req.params.rcaId);
            res.status(201).json(rcaid);
    
        }
        catch(err){
            console.log(err);
        }
    }

    async updateAsset(req,res){
        try{
               console.log("   in controller update   " +  req.params.assetId);
               const {assetId} = req.params;
               console.log( "    assetId  in controller  update     " + assetId);
               console.log( " req.body   in controller update  " + req.body );
               const asset = await assetService. updateAsset({...req.body,assetId});
               res.status(201).json(asset);
       
           }
           catch(err){
               console.log(err);
           }
    }   

    async deleteAsset(req,res){
        try{
            console.log(req.params);
            const {assetId} = req.params;
            console.log(assetId+"   deletedAssetControlleer  "+req.params);
            const assets = await assetService.deleteAsset(assetId);
            res.status(201).json(assets);
        }
        catch(err){
            console.log(err);
        }
    }

}
module.exports = new asestController();