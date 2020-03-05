import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumContentRoutingModule } from './curriculum-content-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { JobComponent } from './job/job.component';
import { EducationComponent } from './education/education.component';
import { ExtracurricularActivityComponent } from './extracurricular-activity/extracurricular-activity.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';




@NgModule({
  declarations: [GeneralInformationComponent, JobComponent, EducationComponent, ExtracurricularActivityComponent, MyCurriculumComponent],
  imports: [
    CommonModule,
    CurriculumContentRoutingModule
  ]
})
export class CurriculumContentModule { }
