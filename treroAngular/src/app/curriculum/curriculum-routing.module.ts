import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserActiveGuard } from '../shared/guards/userActive/user-active-guard';

const routes: Routes = [
  { path: 'my-curriculum',
    loadChildren: () => import('./curriculum-content/curriculum-content.module')
                                 .then(mod => mod.CurriculumContentModule),
    canActivate: [UserActiveGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
