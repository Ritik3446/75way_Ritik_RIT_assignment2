import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Data {
  id!:string ;
  senderName!:string;
  recieverName!:string;
  amount!:number;
}

const transaction: Data[] = [
  {
    "id": "5d7b210d9073a04cd420ed8e",
    "senderName": "Ritik",
    "recieverName": "Reciever 1",
    "amount": 1301.56
  },
  {
    "id": "5d7b210d83a13292bc48f798",
    "senderName": "Sender 1",
    "recieverName": "Reciever 1",
    "amount": -1000
  },
  {
    "id": "5d7b210df9a0e9ba17ab2a9d",
    "senderName": "Sender 1",
    "recieverName": "Reciever 2",
    "amount": -5000
  },
  {
    "id": "5d7b210d37097762bc803932",
    "senderName": "Sender 2",
    "recieverName": "Reciever 1",
    "amount": -6000
  },
  {
    "id": "5d7b210d626693bdd165a67d",
    "senderName": "Sender 2",
    "recieverName": "Reciever 2",
    "amount": 4000
  },
  {
    "id": "5d7b210df48d51834cd34efa",
    "senderName": "Sender 2",
    "recieverName": "Reciever 3",
    "amount": 5000
  }
]

export class TransactiondataService {

  constructor() { }

getTransaction(){
  return transaction;
}
}

