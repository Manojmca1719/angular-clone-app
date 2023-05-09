import { Component, OnInit } from '@angular/core';
import { commuinty } from 'src/app/community-content';

@Component({
  selector: 'app-base-community-layout',
  templateUrl: './base-community-layout.component.html',
  styleUrls: ['./base-community-layout.component.scss']
})
export class BaseCommunityLayoutComponent implements OnInit {

  public communityListData:Array<any> = commuinty;
  public activeCommunityTab: string = 'Community';
  public currentActiveTabContent: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.getCurrentTabContent();
  }

  public getActiveCommunity = (swichTabTo:string) => {
    this.activeCommunityTab = swichTabTo;
    this.getCurrentTabContent();
  }

  public getCurrentTabContent = () => {
    let currentActiveTab = this.communityListData.find(x=>x.tabTitle === this.activeCommunityTab);
    this.currentActiveTabContent = currentActiveTab.tabContent;
  }

  public listRoute = (redirectedURL:string) => {
    window.open(redirectedURL, '_blank');
  }

}
