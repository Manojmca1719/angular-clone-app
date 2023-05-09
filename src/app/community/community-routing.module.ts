import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCommunityLayoutComponent } from './base-community-layout/base-community-layout.component';

const routes: Routes = [
  {
    path:'',
    component:BaseCommunityLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
