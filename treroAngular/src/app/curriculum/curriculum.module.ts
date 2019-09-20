import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';


@NgModule({
  declarations: [
    CurriculumListComponent,
    CurriculumDetailComponent,
    CurriculumFormComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
