import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import { writeRouterModule } from './write.router';
import { UploadModule } from '@progress/kendo-angular-upload';
@NgModule({
  imports: [
    CommonModule,
    writeRouterModule,
    UploadModule,
     
  ],
  declarations: [WriteComponent]
})
export class WriteModule { }
