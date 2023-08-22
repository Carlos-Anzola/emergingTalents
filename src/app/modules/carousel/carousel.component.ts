import { Component, OnInit } from '@angular/core';
import { Offer } from '../../core/models/offer';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  offer!: Offer | undefined;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  MODAL_ID = "MODAL_ID";

  handleOpenModal(offerId: string) {
    this.offer = this.offerList.find((offer)=>offer.id === offerId)
    if(this.offer){

      this.ngxSmartModalService.open(this.MODAL_ID);
    }
  }

  handleCloseModal(offerId: string) {
    this.ngxSmartModalService.close(offerId);
  }

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
      id: "1",
      modality: false
    },
    {
      name: "KFC",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Ingeniero en sistemas",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "2",
      modality: false
    },
    {
      name: "Popeye",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Pizzer",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "3",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Arquitecto",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "4",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Administrador",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "5",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Marino",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "6",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Piloto",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "7",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Barrendero",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "8",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Cocinero",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "9",
      modality: true
    },
    {
      name: "McDonald's",
      categories: ["1234", "5678"],
      salary: 5,
      title: "Ama de casa",
      isAvailable: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/emergingtalents-1f5a2.appspot.com/o/McDonald_s_SVG_logo.svg-removebg-preview.png?alt=media&token=7730393f-5426-475b-b5bb-6573a60e1fcc",
      isDisabled: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus unde. Aliquam expedita exercitationem optio quisquam beatae architecto, quibusdam dolorem animi alias consectetur ducimus aliquid doloremque ex vitae. Dolorem, quam!",
      id: "10",
      modality: true
    }
  ]
  currentIndex: number = 0;

  scrollPosition:number = 0;

  totalCards = this.offerList.length;

  scrollClicks = 0; 
  

  scrollUp() {
    const element = document.querySelector('.carouselBox') as HTMLElement;
    if (element) {
      this.scrollPosition -= element.clientHeight;
      this.scrollPosition = Math.max(this.scrollPosition, 0); // No permitir desplazamiento negativo
      element.scrollTo({ top: this.scrollPosition, behavior: 'smooth' });
      if (this.scrollClicks > 0) {
        this.scrollClicks--; // Restar 1 al contador de scrollClicks
      }
    }
  }

scrollDown() {
  if (this.scrollClicks < 2) { // Limitar a 2 clicks hacia abajo
    const element = document.querySelector('.carouselBox') as HTMLElement;
    if (element) {
      this.scrollPosition += element.clientHeight;
      this.scrollPosition = Math.min(this.scrollPosition, (this.totalCards - 3) * element.clientHeight); // No permitir desplazamiento más allá de la última vista
      element.scrollTo({ top: this.scrollPosition, behavior: 'smooth' });
      this.scrollClicks++;
    }
  }
}

  ngOnInit(): void {
    console.log('offerList', this.offerList)
  }
}



