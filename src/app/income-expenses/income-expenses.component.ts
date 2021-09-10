import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent implements OnInit {
  income!: Observable<string>;
  expense!: Observable<string>;

  constructor(private tService: TransactionService) {}

  ngOnInit(): void {
    this.income = this.tService.getIncome();
    this.expense = this.tService.getExpense();
  }
}
