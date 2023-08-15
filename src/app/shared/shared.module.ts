import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploymentCardsComponent } from './components/employment-cards/employment-cards.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    EmploymentCardsComponent
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forChild(),
  ],
  exports: [
    EmploymentCardsComponent,
    NgxSmartModalModule
  ],
  providers: [NgxSmartModalService],
})
export class SharedModule { }
