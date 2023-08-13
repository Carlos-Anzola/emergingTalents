import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forChild()
  ],
  exports:[NgxSmartModalModule],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
