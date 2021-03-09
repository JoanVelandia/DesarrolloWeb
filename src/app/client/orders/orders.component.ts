import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order/order.model';
import { User } from 'src/app/core/models/user/user.model';
import { LocalStorageService } from 'src/app/core/services/localStorage/local-storage.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  user!: User;
  orders: Order[] = [];
  constructor(
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('CURRENT_USER') as User;
    this.orders = this.ordersService.getOrders(this.user);
  }

}
