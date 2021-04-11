import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : CarDetail []=[];
  carImages: CarImage[]=[];
  currentCar : CarDetail;
  currentImage : CarImage;
  imageUrl="https://localhost:44349/";
  filterText="";

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private carImageService:CarimageService,private cardetailService:CarDetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarsByCar(params["carId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      console.log(this.cars);
      
    })
  }

  setCurrentCar(car:CarDetail){
    this.currentCar = car;
  }

  getCarsByCar(carId:number){
    this.carService.getCarDtoById(carId).subscribe(response=>{
      this.cars = response.data
    })
  }

  getImagesByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data
    });
  }

  getCarImageClass(carImage: CarImage) {

    if ( this.currentImage == carImage) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }


  getCarDetails(cars:CarDetail){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cars = response.data
    }) 
  }

}
