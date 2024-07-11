import { Type } from "class-transformer"
import { IsString,IsNumber, IsInt } from "class-validator"



export class createCarDto {
    @IsString()
    readonly model: string

    @IsInt({message:"El año debe ser un numero entero"})
    @Type(() => Number)
    readonly year: number

    @IsNumber({}, {message:"Debe ser un numero entero o con decimales"})
    @Type(() => Number)
    readonly price: number
}