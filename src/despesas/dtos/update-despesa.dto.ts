import { IsNotEmpty } from "class-validator";

export class UpdateDespesaDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    data: string;
    @IsNotEmpty()
    valor: string;
}