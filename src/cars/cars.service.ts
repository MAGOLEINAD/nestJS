import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UUID } from 'uuid';
import { Car } from './interface/car.interface';
import { updateCarDto, createCarDto } from './dto';
//*Entiendo que en el servicio estaria el acceso a la base de datos y defino los metodos que utilizare para manipularlos.

@Injectable()
export class CarsService {

    private cars: Car[] = [];

    findAll() {
        return this.cars
    }
    // Método para obtener auto por ID
    findCarById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`El auto con ID ${id} no existe en la base de datos`)
        return car
    }
    // Método para crear auto 
    create(createCarDto: createCarDto) {
        const newCar: Car = {
            id: UUID(),
            ...createCarDto
        }

        this.cars.push(newCar)
        return newCar
    }

    // Método para actualizar auto por ID
    updateCarById(id: string, updateCarDto: updateCarDto) {
        let carDB = this.findCarById(id)

        this.cars = this.cars.map(car => {

            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB
            }
            return car
        })
        return carDB
    }
    // Método para borrar auto por ID
    deleteCarById(id: string) {

     this.cars = this.cars.filter(car => car.id !== id  )
    }

      // Método para obtener Carros de DB / SEEDS.
    fillsCarsWithSeedData(cars: Car[]) {
        this.cars = cars
    }
}
