import {infer} from './infer';
export class CustomMap{
  private static map:google.maps.Map 
  private constructor(){
    CustomMap.map = new google.maps.Map(document.getElementById('map'),{
      zoom:1,
      center:{
        lat:0,
        lng:0,
      }
    })
  }

  public static create(){
    if(CustomMap.map){
      console.log(new Error("You cannot create two Maps"))
    }else{
      console.log("You don't have created a new maps \nCreating One for you my Dear");
      console.log("Created");
      return new CustomMap();
    }
  }
  public static add_marker(datahoc:{location:{lat:number;lng:number},injector:string}){
    const infowindow = new google.maps.InfoWindow({
    content:datahoc.injector,
   });
    const marker = new google.maps.Marker({
    position:datahoc.location,
    map:CustomMap.map
  });
  marker.addListener("click", () => {
    infowindow.open(CustomMap.map, marker);
  });
  }
}
