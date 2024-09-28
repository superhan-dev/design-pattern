import { Car } from "../factory/car";
import { Truck } from "../factory/truck";
import { VehicleFactory } from "../factory/vehicle-factory";

describe('factory test', () => {
  let vehicleFactory:VehicleFactory;
  beforeEach(() => {
    vehicleFactory = new VehicleFactory();
  })

 
  it('car factory', () => {
     const car: Car = vehicleFactory.createVehicle({
      vehicleType: 'car',   // Use vehicleType instead of vehicleClass
      doors: 2,
      color: 'orange',
      state: 'second hand',
    });
    
    expect(car).toBeInstanceOf(Car);
  })

  it(('truck factory'), () => {
    /**
     * truck vehicle
     */
    const truck: Truck = vehicleFactory.createVehicle({
      vehicleType: 'truck',  // Use vehicleType instead of vehicleClass
      state: 'brand new',
      wheelSize: 'big',
      color: 'grey',
    });

    expect(truck).toBeInstanceOf(Truck);
  })
});