import { HeaderRenderer } from 'ag-grid/main';
import { Component, OnInit } from '@angular/core';
import { EntityService } from '../service/entity.service';
import { GridOptions } from 'ag-grid';
import { HeaderComponent } from '../../header-component/header.component';


@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  public gridOptions: GridOptions;

  public hc: HeaderComponent ;
  public rowData: any[];
  public columnDefs: any[];
  public totalItems: string;
  public currentPage = 1;
  public totalPages ;
  public pageSize = 20;
  public from;
  public to;
  public bNextVisible = true;
  public bPrevVisible = true;
  private entityList = [];
  private sortBy = 'modifiedTime';
  private orderBy = 'DESC';
  public entityName = '';

  constructor(private _entityService: EntityService) { }

  handleError(error: any) {
    console.log(error);
  }
   handleSuccess(response: any) {
   // this.rowData = response.result.resultList ;
   this.entityList = response.result.resultList ;
   this.gridOptions.api.setRowData(this.entityList);
   this.setPaginationData(response.result);
  }

   private setPaginationData(result) {
     this.currentPage = result.currentPage;
     this.totalItems = result.totalRecords;
     this.pageSize = result.chunkSize;
     this.totalPages = (Math.ceil(Number(result.totalRecords) / Number(this.pageSize))).toString();
     this.from = (Number(this.pageSize) * Number(this.currentPage)) - Number(this.pageSize) + 1;
     this.to = Number(this.from) + Number(result.resultList.length) - 1 ;

     if (this.currentPage === 1) {
        this.bPrevVisible = false;
      }else {
        this.bPrevVisible = true;
      }

      if (Number(this.totalPages) === this.currentPage) {
        this.bNextVisible = false;
      }else {
        this.bNextVisible = true;
      }
   }

   public loadPreviousPage() {
    this.currentPage = this.currentPage - 1;
    this.clearExistingData();
    this.loadData();
   }
   public loadNextPage() {
    this.currentPage = this.currentPage + 1;
    this.clearExistingData();
    this.loadData();
   }

   clearExistingData() {
    this.entityList = [];
    this.gridOptions.api.setRowData(this.entityList);
   }
  ngOnInit() {
    this.gridOptions = {
      // enableSorting : true,
       enableServerSideSorting: true,
       sortingOrder: ['desc','asc'],
      // rowModelType: 'infinite',
      enableFilter : true,
      rowSelection: 'multiple',
      enableColResize: true,
      // paginationPageSize: 20,
      // pagination: true,
     // suppressPaginationPanel: true,
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.columnDefs = this.getColumnDefs();
   /*  this.gridOptions.defaultColDef = {
      headerComponentFramework : <{new(): HeaderComponent}>HeaderComponent,
      headerComponentParams : {
          menuIcon: 'fa-bars'
      }
  }; */
    this.loadData();

  }

  loadData() {
    const requestObj: any = {
          allVersions: false,
          endDate: '',
          startDate: '',
          entitytypeName: this.entityName,
          currentPage: this.currentPage,
          chunkSize: this.pageSize,
          sortBy: this.sortBy,
          orderBy: this.orderBy,
          selectionType: 'all',
          fetchAttributeList: ['businessName', 'technicalName',
                                'dataFileType', 'tableType', 'sourceSchema',
                                'sourcePlatform', 'id', 'createdBy', 'modifiedBy',
                                'createdTime', 'modifiedTime', 'dataStorage',
                                'derived', 'owner', 'latestVersion']
        };

     this._entityService.getEntityList(requestObj)
        .subscribe(
            (response) => this.handleSuccess(response),
            (err) => this.handleError(err),
            () => console.log('the subscription is completed')
        );
  }

 
 public filterData() {
  this.clearExistingData();
  this.loadData();
 }

  private onSortChanged($event) {
    this.getNewSortedData(this.gridOptions.api.getSortModel());
}

getNewSortedData(sortObj) {
  this.sortBy = sortObj[0].colId ;
  this.orderBy = sortObj[0].sort ;
  this.clearExistingData();
  this.loadData();
}
 
  getColumnDefs() {
    const columnDefs: any = [
      {
        headerName: '',
        minWidth: 40,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true,
        headerCheckboxSelection: true
      },
      {
        field: 'businessName',
        headerName: 'Business Name',
        minWidth: 200
      },
      {
        field: 'technicalName',
        headerName: 'Technical Name',
        minWidth: 200
      },
      {
        field: 'dataFileType',
        headerName: 'Data File Type',
        minWidth: 200
      },
      {
        field: 'tableType',
        headerName: 'Table Type',
        minWidth: 200
      },
      {
        field: 'sourceSchema',
        headerName: 'Source Schema',
        minWidth: 200
      },
      {
        field: 'sourcePlatform',
        headerName: 'Source Platform',
        minWidth: 200
      },
      {
        field: 'createdTime',
        headerName: 'Created Time (UTC)',
        minWidth: 200
      },
      {
        field: 'modifiedBy',
        headerName: 'Modified By',
        minWidth: 200
      },
      {
        field: 'entityTypeId',
        headerName: 'Entity ID',
        minWidth: 200
      },
      {
        field: 'version',
        headerName: 'Revision Id',
        minWidth: 200
      },
       {
        field: 'createdBy',
        headerName: 'Created By',
        minWidth: 200
      }, {
        field: 'sharedWith',
        headerName: 'Shared With',
        minWidth: 100
      }];
    return columnDefs;
  }


}
