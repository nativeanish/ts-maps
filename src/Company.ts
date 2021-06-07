import {infer} from './infer';
import Faker from 'faker';
export class Company implements infer{
  name:string;
  catchPhrase:string;
  location = {
    lat:0,
    lng:0,
  };
  injector:string;
  constructor(){
    this.name = Faker.company.companyName();
    this.location.lat = parseFloat(Faker.address.latitude());
    this.location.lng = parseFloat(Faker.address.longitude());
    this.catchPhrase = Faker.company.catchPhrase();
    this.injector = `<h1 id="firstHeading" class="firstHeading">${this.name}</h1><p>${this.catchPhrase}</p>`
  }

  get Company(){
    return {location:this.location,injector:this.injector};
  }
}
