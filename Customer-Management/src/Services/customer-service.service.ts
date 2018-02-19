import { Injectable } from '@angular/core';
import { Customer } from '../Models/CustomerModel';
import { Messages } from '../Models/MessageModel';
@Injectable()
export class CustomerService {

  public CustomerModel: Customer[];
  public MessageModel: Messages[];
  public customer:Customer;
  public message:Messages;
  constructor(){
    this.MessageModel=[];
  }

  getCustomers(): Customer[] {
   this.CustomerModel=ELEMENT_DATA;
   return this.CustomerModel.filter(m=>m.isDeleted==false);
  }
  findByIdCustomer(id): Customer[]  {
  return  this.CustomerModel.filter(word => word.id == id);
  } 


  createCustomer(data): void {    
    this.customer=new Customer();
    this.customer.id=this.CustomerModel.length+1;
    this.customer.name=data.name;
    this.customer.address=data.address;
    this.customer.city=data.city;
    this.customer.zip=data.zip;
    this.customer.country=data.country;
    this.customer.phone=data.phone;
    this.customer.email=data.email;
    this.customer.createdAt=new Date();
    this.customer.updatedAt=new Date();
    this.customer.isDeleted=false;
    this.CustomerModel.push(this.customer);
  }
  replaceByIdCustomer(id, data): void {
    debugger;
    var currentrecord = this.CustomerModel.filter(p => p.id === id);
    if (currentrecord.length == 1) {
      currentrecord[0].name = data.name;
      currentrecord[0].address = data.address;
      currentrecord[0].city = data.city;
      currentrecord[0].zip = data.zip;
      currentrecord[0].country = data.country;
      currentrecord[0].phone = data.phone;
      currentrecord[0].email = data.email;
      currentrecord[0].updatedAt = new Date();
    }

   
  }
  deleteByIdCustomer(id): void {
    let currentcustomer = this.CustomerModel.filter(p => p.id === id)[0];
    currentcustomer.isDeleted=true;
  }
  getMessagesByCustomerId(customerId): Messages[] {
    debugger;
    return  this.MessageModel.filter(word => word.customerId == customerId);
  }
  findByIdMessageByCustomerId(customerId, id): Messages[] {
    return  this.MessageModel.filter(word => word.customerId == customerId && word.id==id);
  }
  createMessageByCustomerId(customerId, data): void {
    debugger;
    this.message=new Messages();
    var arrlength=1;
    if(this.MessageModel!=undefined)
    {
      arrlength=this.MessageModel.length+1;
    }
   this.message.id=arrlength;
   this.message.text=data.text;
   this.message.title=data.title;
   this.message.customerId=customerId;
   this.message.createdAt=new Date();
   this.message.updatedAt=new Date();
   this.message.self=true;
   this.MessageModel.push(this.message);
  }

}
const ELEMENT_DATA: Customer[] = [
  {id: 1, name: 'David',address:'J7 kindlebit Solution',city:'Chandigarh',zip:143521,country:'India',phone:'9814256279',email:'david.price@kindlebit.com',createdAt:new Date(),updatedAt:new Date(),isDeleted:false},
  {id: 2, name: 'Bob',address:'From Ropar',city:'Ropar',zip:160101,country:'India',phone:'9877572389',email:'alan@sevenverbs.com',createdAt:new Date(),updatedAt:new Date(),isDeleted:false}, 
  
  
];