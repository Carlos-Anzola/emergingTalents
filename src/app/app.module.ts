import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forChild(),
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports:[NgxSmartModalModule, JobCardComponent, CarouselComponent],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
