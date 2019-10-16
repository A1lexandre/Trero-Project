import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';


const routes: Routes = [
  { path: '', component: CurriculumListComponent},
  { path: 'detail', component: CurriculumDetailComponent},
  { path: 'my-curriculum', component: MyCurriculumComponent, children: [
      { path: 'general-information', component: CurriculumFormComponent },
      { path: 'job', component: CurriculumFormComponent },
      { path: 'education', component: CurriculumFormComponent },
      { path: 'extracurricular-activity', component: CurriculumFormComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
