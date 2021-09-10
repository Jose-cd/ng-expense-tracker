import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(private transactionService: TransactionService) {}

  deleteTransaction(id: string) {
    this.transactionService.deleteTransaction(id);
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }

  ngOnInit(): void {
    this.getTransactions();
  }
}
