import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentfinishedComponent } from './components/paymentfinished/paymentfinished.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/carImage/:id", component: CarComponent },
  { path: "cars/car/:carId", component: CardetailComponent },
  { path: "cars/brand/:brandId", component: CardetailComponent },
  { path: "cars/color/:colorId", component: CardetailComponent },
  { path: "cars/carImage/:id", component: CardetailComponent },
  { path: "cars/add", component: CarAddComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path: "rental", component:RentalComponent},
  {path:"rental/add", component: PaymentComponent},
  {path:"rental", component: RentalComponent},
  {path:"paymentfinished", component:PaymentfinishedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
