
import { Brand } from 'src/brands/entities/brand.entity'
import { Car } from 'src/cars/interface/car.interface'
import { v4 as UUID } from 'uuid'


export const CARS_SEED: Car[] = [
    {
        id: UUID(),
        model: 'Tesla PODER',
        year: 2020,
        price: 1250000
    },
    {
        id: UUID(),
        model: 'Ferrari ROJO',
        year: 2021,
        price: 2250000
    },
    {
        id: UUID(),
        model: 'Ford MUSTANG',
        year: 2022,
        price: 4250000
    }
]

export const BRANDS_SEED: Brand [] = [
    {
        id: UUID(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
    {
        id: UUID(),
        name: 'Ferrari',
        createdAt: new Date().getTime()
    },
    {
        id: UUID(),
        name: 'Ford',
        createdAt: new Date().getTime()
    }
] 

