import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../models/offer';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    offerList: Offer[] = [
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
  constructor() { }
  customOptions: any = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      950: {
        items: 3,
      },
    },
  };
  ngOnInit(): void {
  }

}
