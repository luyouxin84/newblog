import {NgModule} from '@angular/core';
import {NotfoundRouterModule} from './notfound-router.module';
import {NotfoundComponent} from './notfound.component';

@NgModule({
  imports: [NotfoundRouterModule], 
  declarations: [NotfoundComponent]
})
export class NotfoundModule {}