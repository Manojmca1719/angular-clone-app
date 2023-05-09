import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRoutingModule } from './docs-routing.module';
import { BaseDocsLayoutComponent } from './base-docs-layout/base-docs-layout.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    BaseDocsLayoutComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    IconsModule
  ]
})
export class DocsModule { }
