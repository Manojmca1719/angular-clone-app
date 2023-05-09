import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseDocsLayoutComponent } from './base-docs-layout/base-docs-layout.component';

const routes: Routes = [
  {
    path:'',
    component:BaseDocsLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
