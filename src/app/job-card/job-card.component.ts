import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
  
  visible: boolean = true;
  MODAL_ID = "MODAL_ID";
  
  changeicon(){
    this.visible = !this.visible
  }
  ngOnInit(): void {

  }
  handleOpenModal(modalId: string){
    this.ngxSmartModalService.open(modalId);
  }
  handleCloseModal(modalId: string) {
    this.ngxSmartModalService.close(modalId);
  }
}