import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChunkuploadPage } from './chunkupload';

@NgModule({
  declarations: [
    ChunkuploadPage,
  ],
  imports: [
    IonicPageModule.forChild(ChunkuploadPage),
  ],
})
export class ChunkuploadPageModule {}
