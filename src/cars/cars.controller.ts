import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto, updateCarDto } from './dto';


//*Entiendo que en el controlador definire los endpoints / rutas y utilizare los metodos que defini en el servicio

@Controller('cars')
export class CarsController {

    constructor(
        private readonly CarsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.CarsService.findAll()
    }
    @Get(':id') 
    getCarById(@Param('id',ParseUUIDPipe) id:string) {
        return this.CarsService.findCarById(id)
    }
    @Post()
    createCar(@Body() createCarDto:createCarDto) {
        return this.CarsService.create(createCarDto)
    }
    @Patch(':id')
    updateCar(        
        @Param("id",ParseUUIDPipe) id:string,
        @Body() updateCarDto: updateCarDto) {
        return this.CarsService.updateCarById(id , updateCarDto)
    }
    @Delete(':id') 
    deleteCar(@Param('id', ParseUUIDPipe) id:string) {
       this.CarsService.deleteCarById(id)
    }
}
