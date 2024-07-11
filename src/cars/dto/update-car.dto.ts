import { Type } from "class-transformer"
import { IsString, IsNumber, IsInt, IsUUID, IsOptional} from "class-validator"



export class updateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string
    @IsString()
    @IsOptional()
    readonly model?: string
    @IsOptional()
    @IsInt({ message: "El año debe ser un numero entero" })
    @Type(() => Number)
    readonly year?: number
    @IsOptional()
    @IsNumber({}, { message: "Debe ser un numero entero o con decimales" })
    @Type(() => Number)
    readonly price?: number
}