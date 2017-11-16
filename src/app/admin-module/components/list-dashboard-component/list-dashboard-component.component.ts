import { GridOptions } from 'ag-grid';
import { Component, enableProdMode, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-list-dashboard-component',
  templateUrl: './list-dashboard-component.component.html',
  styleUrls: ['./list-dashboard-component.component.css']
})
export class ListDashboardComponentComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor(private _dashboardService: DashboardService) { }

   handleError(error: any) {
     console.log(error);
   }

    handleSuccess(response: any) {
     this.rowData = response.result.resultList ;
   }

  ngOnInit() {

    this.gridOptions = {
      enableSorting : true,
      enableFilter : true,
      animateRows : true,
    //  enableServerSideSorting: true,
      rowSelection: 'multiple',
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
       // this.gridOptions.api.setDatasource(this.dataSource);
      }
    };
    this.columnDefs = this.getColumnDefs();

    /* const requestObj: any = {
          currentPage: 1,
          chunkSize: 20,
          sortBy: '',
          orderBy: '',
          selectionType: 'all',
          category: '',
          componentName: ''
        }; */

      /*   this._dashboardService.getDashboardList(requestObj)
        .subscribe(
            (response) => this.handleSuccess(response),
            (err) => this.handleError(err),
            () => console.log('the subscription is completed')
        ); */

      this.loadData();

  }

  loadData() {
    const requestObj: any = {
          currentPage: 1,
          chunkSize: 20,
          sortBy: '',
          orderBy: '',
          selectionType: 'all',
          category: '',
          componentName: ''
        };

     this._dashboardService.getDashboardList(requestObj)
        .subscribe(
            (response) => this.handleSuccess(response),
            (err) => this.handleError(err),
            () => console.log('the subscription is completed')
        );
  }

  /*  dataSource = {
    pageSize: 10,
    overflowSize: 100,



  getRows: (params: any) => {

    var rowData = this.loadData();
    //var rowsThisPage = rowData.slice(params.startRow, params.endRow);
   // console.log(rowsThisPage)
    var lastRow = -1;
    params.successCallback(rowData, lastRow);
}
} */

  getColumnDefs() {
    const columnDefs: any = [
      {
        headerName: '', width: 30, checkboxSelection: true, suppressSorting: true,
        suppressMenu: true, pinned: true
      },
      {
        field: 'componentName',
        headerName: 'Dashboard Name',
      }, {
        field: 'createdTime',
        headerName: 'Created Time (UTC)',
      }, {
        field: 'createdBy',
        headerName: 'Created By',
      }, {
        field: 'sharedWith',
        headerName: 'Shared With',
      }];
    return columnDefs;
  }

}
