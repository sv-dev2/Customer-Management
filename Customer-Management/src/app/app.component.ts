import { Component,ViewChild,Inject } from '@angular/core';
import { CustomerService } from '../Services/customer-service.service';
import {MatTableDataSource,MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Customer } from '../Models/CustomerModel';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]  
})
export class AppComponent {
  public CustomerModel: Customer[];
  public customer:Customer;
  public arrayLength:number;
  displayedColumns = ['message','name', 'address', 'city','zip','country','phone','email','actionsColumn'];
  dataSource= new MatTableDataSource(this.customerService.getCustomers());
  constructor(private customerService: CustomerService,public dialog: MatDialog){
    this.customer=new Customer();
    this.arrayLength=this.customerService.getCustomers().length;
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
  SendMessage(customer: any):void {
    debugger;
  }
  openDialog(data:any): void {
    debugger;
    
    if(data!=undefined)
    {
      this.customer=data;
    }
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      disableClose:true,
      width: '250px',
      data: { name: this.customer.name,address: this.customer.address ,city: this.customer.city
      ,zip:this.customer.zip,country:this.customer.country,phone:this.customer.phone,email:this.customer.email
      }
    });
dialogRef.beforeClose().subscribe(result => {
debugger;
});
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if(result!=undefined)
      {
        this.customerService.createCustomer(result);
        this.CustomerModel=this.customerService.getCustomers();
        this.dataSource= new MatTableDataSource(this.CustomerModel);
        this.arrayLength=this.CustomerModel.length;
      }
     
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
    @Inject(MAT_DIALOG_DATA) public data: any,public snackBar: MatSnackBar) { 

      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  SaveCustomer(data): void {
    //add validation here for empty record
    debugger;
    let snackBarRef;
    if(data.name==undefined || data.name=="")
    {
       snackBarRef = this.openSnackBar("Please enter name","Error!");
    }
    else if(data.address==undefined || data.address=="")
    {
      snackBarRef =this.openSnackBar("Please enter address","Error!");
    }
    else if(data.city==undefined || data.city=="")
    {
      snackBarRef = this.openSnackBar("Please enter city","Error!");
    }
    else if(data.zip==undefined || data.zip=="")
    {
      snackBarRef = this.openSnackBar("Please enter zip","Error!");
    }
    else if(data.country==undefined || data.country=="")
    {
      snackBarRef = this.openSnackBar("Please enter country","Error!");
    }
    else if(data.phone==undefined || data.phone=="")
    {
      snackBarRef = this.openSnackBar("Please enter phone","Error!");
    }
    else if(data.email==undefined || data.email=="")
    {
      snackBarRef =  this.openSnackBar("Please enter email","Error!");
    }
    else{
      this.dialogRef.close(data);
      if(snackBarRef!=undefined)
      {
        snackBarRef.dismiss();
      }
    }
    debugger;
  //document.getElementsByClassName("cdk-visually-hidden").item(1).innerHTML="";
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
