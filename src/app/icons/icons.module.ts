import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Moon, Github, Twitter, Youtube, Sun, Menu, ExternalLink, ChevronRight } from 'angular-feather/icons';

const icons = {
  Moon,
  Github,
  Twitter,
  Youtube,
  Sun,
  Menu,
  ExternalLink,
  ChevronRight
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
