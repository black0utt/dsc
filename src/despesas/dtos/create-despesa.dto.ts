import { IsNotEmpty } from "class-validator";

export class CreateDespesaDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    data: string;
    @IsNotEmpty()
    valor: string;
}