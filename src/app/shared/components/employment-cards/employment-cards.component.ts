import { Component, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Offer } from 'src/app/core/models/offer';

@Component({
  selector: 'app-employment-cards',
  templateUrl: './employment-cards.component.html',
  styleUrls: ['./employment-cards.component.scss']
})

export class EmploymentCardsComponent {
  @Input() offer!: Offer
  visible: boolean = true;
  MODAL_ID = "MODAL_ID";

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  changeicon() {
    this.visible = !this.visible
  }
  handleOpenModal(modalId: string) {
    this.ngxSmartModalService.open(modalId);
  }
  handleCloseModal(modalId: string) {
    this.ngxSmartModalService.close(modalId);
  }
}
