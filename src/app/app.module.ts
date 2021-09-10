import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    AddTransactionComponent,
    BalanceComponent,
    IncomeExpensesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
