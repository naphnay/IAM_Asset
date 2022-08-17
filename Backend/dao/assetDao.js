const { default: knex } = require('knex');
const db = require('../db/db');
class assetDao{

    async assetList(){
        const list = await db('Assets');
        return list;      
    }

    async createAsset(rcaId,plant,processArea,asset){
        console.log("inside dao");
          const [rcaId2] = await db('Assets').insert({
            
            plant: plant,
            processArea: processArea,
            asset: asset,
            rcaId: rcaId,
              
          })
          .returning('rcaId');
          const asset2 = [rcaId2,plant,processArea,asset]
          return asset2;
    }  

    async updateAsset(assetId,plant,processArea,asset){
        console.log( " inside dao update   "+ assetId + "  "+plant+"  "+processArea+"  "+asset );
        const [asset2] = await db('Assets')
        .where({assetId:assetId})
        .update({
            plant: plant,
            processArea: processArea,
            asset: asset,
        })
        .returning(['assetId']);
        console.log( "  in dao update" + asset2 );
        return asset2;
    }

    async deleteAsset(assetId){
        const asset = await db('Assets').where({assetId:assetId}).del();
        console.log(asset);
        return "successfully deleted !!!";      
      }  
}

module.exports = new assetDao();










