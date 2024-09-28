import { Car } from "./car";
import { Truck } from "./truck";

export class VehicleFactory {
  vehicleClass: any;
  constructor(){
    this.vehicleClass = Car;
  }

  createVehicle(options:any){
    // type 으로 구분하고 나머지 props를 이용해서 클래스를 생성하면
    // 구분자에 맞게 truck인지 car인지 구분해서 클래스를 생성할 수 있다.
    const {vehicleType, ...props} = options;

    switch(vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
    }

    return new this.vehicleClass(props);
  }
}