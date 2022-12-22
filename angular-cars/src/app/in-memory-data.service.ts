import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 1, name: 'Honda Accord' , image: 'https://media.ed.edmunds-media.com/honda/accord-hybrid/2021/oem/2021_honda_accord-hybrid_sedan_touring_fq_oem_1_1600.jpg'},
      { id: 2, name: 'Ford F-Series Pickup' , image: 'https://www.ford.com/is/image/content/dam/brand_ford/en_us/brand/trucks/f150/brand_f-150/dm/22_F150_R7A7574_Tremor_CAN.tif?croppathe=1_21x9&wid=1440' },
      { id: 3, name: 'Honda Civic' , image: 'https://editorial.pxcrush.net/carsales/general/editorial/2020_honda_civic_type_r-1.jpg?width=1024&height=683'},
      { id: 4, name: 'Toyota Camry' , image: 'https://scene7.toyota.eu/is/image/toyotaeurope/toyota-camry-2021-gallery-01-full_tcm-25-2203475?qlt=80&wid=1280&fit=fit,1&ts=1671539384192'},
      { id: 5, name: 'Nissan Altima' , image: 'https://hips.hearstapps.com/hmg-prod/images/2023-nissan-altima-113-1654783718.jpg?crop=0.712xw:0.535xh;0.132xw,0.347xh&resize=1200:*'},
      { id: 6, name: 'Toyota Corolla' , image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/2019_Toyota_Corolla_Design_VVT-i_HEV_1.8_Front.jpg'},
      { id: 7, name: 'Chevrolet Silverado' , image: 'https://editorial.pxcrush.net/carsales/general/editorial/hsv-silverado-2020-c-t976.jpg?width=1024&height=683'},
      { id: 8, name: 'Chevrolet Malibu' , image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/cars/malibu/mov/01-images/colorizer/2023-malibu-1sp-gb8-colorizer.jpg?imwidth=960'},
      { id: 9, name: 'Toyota Supra' , image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/2020_Toyota_GR_Supra_%28United_States%29.png'}
    ];
    return {cars};
  }

  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}