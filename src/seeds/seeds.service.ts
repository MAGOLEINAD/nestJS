import { Injectable } from '@nestjs/common';
import { CARS_SEED,BRANDS_SEED } from './data/data';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedsService {
constructor(
  private readonly CarsService: CarsService,
  private readonly BrandService: BrandsService
) {}

  populateDB() {
     this.CarsService.fillsCarsWithSeedData(CARS_SEED)
     this.BrandService.fillsBrandsWithSeedData(BRANDS_SEED)
     return 'Seeds Executed'
  }

}
