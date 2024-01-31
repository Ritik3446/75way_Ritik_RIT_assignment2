import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { TransactiondataService } from './transactiondata.service'
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-transactiondata',
  templateUrl: './transactiondata.component.html',
  styleUrls: ['./transactiondata.component.scss']
})
export class TransactiondataComponent{

  fileName = 'ExcelSheet.xlsx'
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  transactions: any[] = [];
  dataSource!: ArrayStore;
  selectedItemKeys: any[] = [];
  constructor(private dataService: TransactiondataService) {

    // Assuming you have a DataService to fetch transactions
    this.loadTransactions();
    console.log(this.dataService.getTransaction())
    this.dataSource = new ArrayStore({
      key: 'id',
      data: dataService.getTransaction(),
    });
  }
  loadTransactions() {
    this.dataService.getTransaction();
  }

  onSelectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  deleteRecords() {
    console.log('Selected Item Keys:', this.selectedItemKeys);
    this.selectedItemKeys.forEach((key) => {
      this.dataSource.remove(key);
    });
    this.selectedItemKeys = [];
    this
      .dataGrid.instance.refresh();
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('gridContainer');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}






