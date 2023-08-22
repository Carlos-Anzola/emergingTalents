import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Offer } from 'src/app/core/models/offer';

@Component({
  selector: 'app-employment-cards',
  templateUrl: './employment-cards.component.html',
  styleUrls: ['./employment-cards.component.scss']
})

export class EmploymentCardsComponent {
  @Input() offer!: Offer
  
  @Output() handleOfferEmitter = new EventEmitter <string>();

  visible: boolean = true;

  constructor() { }

  changeicon() {
    this.visible = !this.visible
  }
  handleOpenModal(modalId: string) {
    // this.ngxSmartModalService.open(modalId);
    this.handleOfferEmitter.emit(modalId)
  }
  handleCloseModal(modalId: string) {
    // this.ngxSmartModalService.close(modalId);
  }
}
