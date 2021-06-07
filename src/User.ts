import {infer} from './infer';
import Faker from 'faker';
export class User implements infer{
  name:string;
  injector:string;
  location = {
    lat:0,
    lng:0,
  }
  constructor(){
    this.name = Faker.name.firstName();
    this.location.lng = parseFloat(Faker.address.longitude());
    this.location.lat = parseFloat(Faker.address.latitude());
    this.injector = `<h1 id="firstHeading" class="firstHeading">${this.name}</h1>`;
  }
  get User(){
    return {injector:this.injector,location:this.location}
  }
}
