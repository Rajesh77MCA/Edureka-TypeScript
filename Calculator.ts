import { CalculatorService } from './calculator.service';
import { OrderService } from './order.service';

class Calculator{
  constructor(private _service:CalculatorService,
   private _orderservice: OrderService )
  {

  }

  add(a:number, b: number)
  {
      return this._service.add(a,b);
  }

  getOrder()
  {
      return this._orderservice.getOrders();
  }

}
