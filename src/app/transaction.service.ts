import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}
  transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<
    Transaction[]
  >([]);

  expense: BehaviorSubject<string> = new BehaviorSubject('0');
  income: BehaviorSubject<string> = new BehaviorSubject('0');
  total: BehaviorSubject<string> = new BehaviorSubject('0.00');

  getTransactions = () => this.transactions$;

  addTransactions = (t: Transaction) => {
    let newArr = this.transactions$.getValue().concat(t);
    this.transactions$.next(newArr);

    let amounts: number[] = newArr.map((transaction) => transaction.value);

    this.total.next(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));

    this.expense.next(
      (
        amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0) * -1
      ).toFixed(2)
    );

    this.income.next(
      amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    );
  };

  deleteTransaction(id: string) {
    const newArr = this.transactions$.getValue().filter((i) => i.id !== id);
    this.transactions$.next(newArr);

    let amounts: number[] = newArr.map((transaction) => transaction.value);

    this.total.next(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));

    this.expense.next(
      (
        amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0) * -1
      ).toFixed(2)
    );

    this.income.next(
      amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    );
  }

  getTotal(): Observable<string> {
    return this.total;
  }

  getIncome(): Observable<string> {
    return this.income;
  }

  getExpense(): Observable<string> {
    return this.expense;
  }
}
