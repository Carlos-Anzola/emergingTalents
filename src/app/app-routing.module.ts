import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';

const routes: Routes = [
  {
    path: 'card',
    component: JobCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
