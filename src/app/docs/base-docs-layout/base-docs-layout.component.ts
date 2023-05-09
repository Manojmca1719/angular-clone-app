import { Component, OnInit } from '@angular/core';
import { docsMenu } from 'src/app/docs-menu';
@Component({
  selector: 'app-base-docs-layout',
  templateUrl: './base-docs-layout.component.html',
  styleUrls: ['./base-docs-layout.component.scss']
})
export class BaseDocsLayoutComponent implements OnInit {

  public listMenu: Array<any> = docsMenu;
  public levelSubMenu: number = 0;
  public activeRightSideMenu: Array<any> = [];
  public mainMenuList: Array<any> = [];
  public firstLevelMenuList: Array<any> = [];
  public secondLevelMenuList: Array<any> = [];
  public thirdLevelMenuList: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  public getLevelSubMenuFindRightMenu = (mainMenuId?: any, firstLevelMenuId?: any, secondLevelMenuId?: any, thirdLevelMenuId?: any) => {
    if (mainMenuId && !firstLevelMenuId && !secondLevelMenuId && !thirdLevelMenuId) {
      this.levelSubMenu = 1;
      this.swithLevelMenu(mainMenuId)
    } else if (mainMenuId && firstLevelMenuId && !secondLevelMenuId && !thirdLevelMenuId) {
      this.levelSubMenu = 2;
      this.swithLevelMenu(mainMenuId, firstLevelMenuId)
    } else if (mainMenuId && firstLevelMenuId && secondLevelMenuId && !thirdLevelMenuId) {
      this.levelSubMenu = 3;
      this.swithLevelMenu(mainMenuId, firstLevelMenuId, secondLevelMenuId)
    } else if (mainMenuId && firstLevelMenuId && secondLevelMenuId && thirdLevelMenuId) {
      this.levelSubMenu = 4;
      this.swithLevelMenu(mainMenuId, firstLevelMenuId, secondLevelMenuId, thirdLevelMenuId)
    }
  }

  public swithLevelMenu = (menuId?: any, firstLevelSubMenuID?: any, secondLevelSubMenuId?: any, thirdLevelSubMenuId?: any) => {
    switch (this.levelSubMenu) {
      case 1:
        this.getListMainLevelRightMenu(menuId);
        break;
      case 2:
        this.getListFirstLevelRightMenu(menuId, firstLevelSubMenuID);
        break;
      case 3:
        this.getListSecondLevelRightMenu(menuId, firstLevelSubMenuID, secondLevelSubMenuId);
        break;
      case 4:
        this.getListThirdLevelRightMenu(menuId, firstLevelSubMenuID, secondLevelSubMenuId, thirdLevelSubMenuId);
        break;

      default:
        break;
    }
  }

  public getListMainLevelRightMenu = (mainMenuId?: any) => {
      let findMainMenu = this.listMenu.find((w: any) => w.id === mainMenuId);
      findMainMenu.select = !findMainMenu.select;
      this.activeRightSideMenu = findMainMenu.rightMenu;
  }
  public getListFirstLevelRightMenu = (mainMenuId?: any, firstLevelMenuId?: any) => {
      let findMainMenu = this.listMenu.find((w: any) => w.id === mainMenuId);
      let findFirstLevelMenu = findMainMenu.firstLevelSubMenu.find((x: any) => x.id === firstLevelMenuId);
      findFirstLevelMenu.select = !findFirstLevelMenu.select;
      this.activeRightSideMenu = findFirstLevelMenu.rightMenu;
  }
  public getListSecondLevelRightMenu = (mainMenuId?: any, firstLevelMenuId?: any, secondLevelMenuId?: any) => {
      let findMainMenu = this.listMenu.find((w: any) => w.id === mainMenuId);
      let findFirstLevelMenu = findMainMenu.firstLevelSubMenu.find((x: any) => x.id === firstLevelMenuId);
      let findSecondLevelMenu = findFirstLevelMenu.secondLevelSubMenu.find((y: any) => y.id === secondLevelMenuId);
      findSecondLevelMenu.select = !findSecondLevelMenu.select;
      this.activeRightSideMenu = findSecondLevelMenu.rightMenu;
  }
  public getListThirdLevelRightMenu = (mainMenuId?: any, firstLevelMenuId?: any, secondLevelMenuId?: any, thirdLevelMenuId?: any) => {
      let findMainMenu = this.listMenu.find((w: any) => w.id === mainMenuId);
      let findFirstLevelMenu = findMainMenu.firstLevelSubMenu.find((x: any) => x.id === firstLevelMenuId);
      let findSecondLevelMenu = findFirstLevelMenu.secondLevelSubMenu.find((y: any) => y.id === secondLevelMenuId);
      let findThirdLevelMenu = findSecondLevelMenu.thirdLevelSubMenu.find((z: any) => z.id === thirdLevelMenuId);
      this.activeRightSideMenu = findThirdLevelMenu.rightMenu;
  }
}
