import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UUID } from 'uuid';
import { car } from './interface/car.interface';
import { updateCarDto, createCarDto } from './dto';
//*Entiendo que en el servicio estaria el acceso a la base de datos y defino los metodos que utilizare para manipularlos.

@Injectable()
export class CarsService {

    private cars: car[] = [
        {
            id: UUID(),
            model: 'Tesla Model S',
            year: 2021,
            price: 79999,
        },
        {
            id: UUID(),
            model: 'Ford Mustang',
            year: 2020,
            price: 55999,
        },
        {
            id: UUID(),
            model: 'Chevrolet Camaro',
            year: 2019,
            price: 42999,
        },
    ];
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
        const newCar: car = {
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
}
