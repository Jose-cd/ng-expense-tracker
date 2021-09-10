import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  total!: Observable<string>;
  constructor(private tService: TransactionService) {}

  ngOnInit(): void {
    this.total = this.tService.getTotal();
  }
}
