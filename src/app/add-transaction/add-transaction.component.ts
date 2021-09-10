import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent implements OnInit {
  transaction: Transaction = {
    id: uuid.v4(),
    title: '',
    value: 0,
  };

  constructor(private transactionService: TransactionService) {}

  addTransaction(): void {
    this.transactionService.addTransactions(this.transaction);
    this.transaction = {
      id: uuid.v4(),
      title: '',
      value: 0,
    };
  }

  ngOnInit(): void {}
}
