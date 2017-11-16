import { AccessCheckService } from '../service/access-check.service';
import { Pipe, PipeTransform } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Pipe({
  name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {

  constructor(private _accessCheck: AccessCheckService) {}

  private _availablePermission: Array<any> = [];
  private finalItemList = [];

  transform(menuItems: any): any {
    let filteredItems: Array<any> = [] ;
    filteredItems = menuItems ; //this.getMenuForCurrentUser(menuItems);
    //filteredItems =  menuItems ;
    return filteredItems;
  }

  getMenuForCurrentUser(items: any) {
    let i = 0;
    items.forEach(item => {
      this.finalItemList.push(item);
      i = this.finalItemList.length -1 ;
      this.finalItemList[i].subMenu = [];
      this.getModuleMenu(item.subMenu) ;
    });

    return this.finalItemList ;
  }

  private getModuleMenu(item) {
    let p = this.finalItemList.length -1 ;
    this._availablePermission = this._accessCheck.getValue();
    item.forEach(item1 => {

      if(item1.subMenu){
        this.getModuleMenu(item1.subMenu)
      }else {
        for(let i=0;i<item.length;i++){
          this._availablePermission.forEach(perObj => {
            if(perObj.moduleTechnicalName === item.subMenu[i].module){
              for(let j=0;j<perObj.secModulePermissions.length;j++){
               if(item.subMenu[i].access === perObj.secModulePermissions[j].permissionTechnicalName){
                 this.finalItemList.push(item);
               }
            }
          }
        });
      }
    }
  });
}

}
