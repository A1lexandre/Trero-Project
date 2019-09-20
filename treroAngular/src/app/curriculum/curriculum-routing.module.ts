import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';


const routes: Routes = [
  { path: '', component: CurriculumListComponent},
  { path: 'detail', component: CurriculumDetailComponent},
  { path: 'editar/:id', component: CurriculumFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
