import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsModule } from './docs/docs.module';
import { CommunityModule } from './community/community.module';

const routes: Routes = [
  {
    path: '',
    redirectTo:'docs',
    pathMatch:'full'
  },
  {
    path: 'docs',
    loadChildren: () => DocsModule
  },
  {
    path: 'community',
    loadChildren: () => CommunityModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
