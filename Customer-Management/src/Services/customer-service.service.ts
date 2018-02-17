import { Injectable } from '@angular/core';
import { Customer } from '../Models/CustomerModel';
import { Message } from '../Models/MessageModel';
@Injectable()
export class CustomerService {

  public CustomerModel: Customer[];
  public MessageModel: Message[];
  constructor(){
     
  }

  getCustomers(): Customer[] {
   this.CustomerModel=ELEMENT_DATA;
   return this.CustomerModel;
  }
  findByIdCustomer(id): void {
   
  }
  createCustomer(data): void {
   
  }
  replaceByIdCustomer(id, data): void {
   
  }
  deleteByIdCustomer(id): void {
   
  }
  getMessagesByCustomerId(customerId): void {
   
  }
  findByIdMessageByCustomerId(customerId, id): void {
   
  }
  createMessageByCustomerId(customerId, data): void {
   
  }

}
const ELEMENT_DATA: Customer[] = [
  {id: 1, name: 'Ashwani',address:'J7 kindlebit Solution',city:'Chandigarh',zip:143521,country:'India',phone:'9814256279',email:'ashwani.sharma@kindlebit.com',createdAt:new Date(),updatedAt:new Date()},
  {id: 2, name: 'Prince',address:'From Ropar',city:'Ropar',zip:160101,country:'India',phone:'9877572389',email:'prince.chopra@kindlebit.com',createdAt:new Date(),updatedAt:new Date()}, 
  {id: 3, name: 'Prince',address:'From Ropar',city:'Ropar',zip:160101,country:'India',phone:'9877572389',email:'prince.chopra@kindlebit.com',createdAt:new Date(),updatedAt:new Date()}, 
  
];