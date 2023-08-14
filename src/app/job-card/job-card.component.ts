import { Component, Input, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Offer } from '../models/offer';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  // modality: boolean = true;
  @Input() offer: Offer[] = [
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Freidor de papas fritas profesional",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: 1,
      modality: true
    },
  ]
  
  constructor(public ngxSmartModalService: NgxSmartModalService) {}
  
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