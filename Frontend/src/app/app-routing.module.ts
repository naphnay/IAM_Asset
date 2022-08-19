import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';

const routes: Routes = [
  {path : 'assetDetails',component: AssetDetailsComponent},
  {path : 'addAsset',component: AddAssetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}







