import { CarDetail } from "./cardetail";

export class CartItem{
    car:CarDetail;
    quantity:number;
    carId: number;
    customerId: number;
    rentDate: Date;
    numberOfDate: number;
    brandName: string;
    colorName: string;
    modelYear: number;
    dailyPrice: number;
    totalPrice: number;
}

export class CartSummary {
    customerId:number;
    cartTotal:number;
  }