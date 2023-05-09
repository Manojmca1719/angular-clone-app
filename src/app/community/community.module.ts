import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { BaseCommunityLayoutComponent } from './base-community-layout/base-community-layout.component';


@NgModule({
  declarations: [
    BaseCommunityLayoutComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
