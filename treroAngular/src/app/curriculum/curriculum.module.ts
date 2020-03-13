import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';


@NgModule({
  declarations: [
    CurriculumListComponent,
    MyCurriculumComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
