import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from './icons/icons.module';
import { DocsModule } from './docs/docs.module';
import { CommunityModule } from './community/community.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule,
    IconsModule,
    DocsModule,
    CommunityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
