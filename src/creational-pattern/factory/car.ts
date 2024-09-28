export class Car {
  doors: number;
  state: string;
  color: string;
  
  constructor({doors=4, state = 'brand new', color='silver'} = {}) {
    this.doors=doors;
    this.state=state;
    this.color=color;
  }
}
