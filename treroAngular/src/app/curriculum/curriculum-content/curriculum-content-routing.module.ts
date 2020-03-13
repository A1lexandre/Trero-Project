import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { GeneralInformationComponent } from './general-information/general-information.component';
import { JobComponent } from './job/job.component';
import { EducationComponent } from './education/education.component';
import { ExtracurricularActivityComponent } from './extracurricular-activity/extracurricular-activity.component';
import { MyCurriculumComponent } from '../my-curriculum/my-curriculum.component';
import { UserActiveGuard } from 'src/app/shared/guards/userActive/user-active-guard';


const routes: Routes = [
  { path: '', component: MyCurriculumComponent },
  { path: 'general-information', component: GeneralInformationComponent },
  { path: 'job', component: JobComponent },
  { path: 'education', component: EducationComponent },
  { path: 'extracurricular-activity', component: ExtracurricularActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CurriculumContentRoutingModule { }
