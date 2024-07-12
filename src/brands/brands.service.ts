import { Injectable, NotFoundException, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import {v4 as UUID} from 'uuid'

@Injectable()
export class BrandsService {

private brands: Brand [] = [

]

  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto
    const brand: Brand = {
      id: UUID(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()

    }
    this.brands.push (brand)
    return {
      message: 'Se creó una nueva marca',
      brand: brand,
    };
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (!brand) throw new NotFoundException(`Brand with ${id} not found`)
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id)
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime()
        brandDB = {...brandDB, ...updateBrandDto}
        return brandDB
      }
      return brand
    })

    return {
      message: 'Se actualizo una marca',
      brand: brandDB,
    };
  }

  remove(id: string) {
   const  brandToDelete = this.findOne(id)
    this.brands = this.brands.filter(brand => brand.id !== id)
    return {
      message: 'Se elimino la marca',
      brand: brandToDelete,
    };
  }

  fillsBrandsWithSeedData(brands : Brand []) {
     this.brands = brands
  }
}
