export class Truck {
  state: string;
  wheelSize: string;
  color: string;
  
  constructor({state='used', wheelSize='large', color='blue'} = {}){
    this.state = state;
    this.wheelSize = wheelSize;
    this.color = color;
  }
}