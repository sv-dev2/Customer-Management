import { Component,ViewChild,Inject } from '@angular/core';
import { CustomerService } from '../Services/customer-service.service';
import {MatTableDataSource,MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Customer } from '../Models/CustomerModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]  
})
export class AppComponent {
  public CustomerModel: Customer[];
  public customer:Customer;
  displayedColumns = ['name', 'address', 'city','zip','country','phone','email','actionsColumn'];
  dataSource= new MatTableDataSource(this.customerService.getCustomers());
  constructor(private customerService: CustomerService,public dialog: MatDialog){
    this.customer=new Customer();
  }
  ngOnInit() {    
  }
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialog(data:any): void {
    debugger;
    if(data!=undefined)
    {
      this.customer=data;
    }
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.customer.name,address: this.customer.address ,city: this.customer.city
      ,zip:this.customer.zip,country:this.customer.country,phone:this.customer.phone,email:this.customer.email
      }
    });
dialogRef.beforeClose().subscribe(result => {


});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customerService.createCustomer(result);
      this.dataSource= new MatTableDataSource(this.customerService.getCustomers());
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'CustomerDialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
