import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { EmploymentCardsComponent } from './shared/components/employment-cards/employment-cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carousel',
    pathMatch: 'full'
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'card',
    component: EmploymentCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
