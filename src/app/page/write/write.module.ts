import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import { writeRouterModule } from './write.router';
import { UploadModule } from '@progress/kendo-angular-upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    writeRouterModule,
    UploadModule,
     FormsModule,
  ],
  declarations: [WriteComponent]
})
export class WriteModule { }
