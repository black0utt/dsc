import { UpdateDespesaDTO } from './dtos/update-despesa.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDTO } from './dtos/create-despesa.dto';

@Controller('despesas')
export class DespesasController {

    constructor(private despesasService: DespesasService){
        
    }

    @Get()
    getAllDespesas(){
        return this.despesasService.getAllDespesas();
    }

    //tutorial aula
    @Get("/:id")
    getDespesasById(@Param('id') id){   
        return this.despesasService.getDespesasById(id);
    }
    @Post()
    createDespesa(@Body() createDespesaDTO: CreateDespesaDTO){
        return this.despesasService.createDespesa(createDespesaDTO);
    }
    @Put("/:id")
    updateDespesa(@Param('id') id,@Body() UpdateDespesaDTO: UpdateDespesaDTO){
        return this.despesasService.updateDespesa(id, UpdateDespesaDTO);
    }
    @Delete("/:id")
    deleteDespesa(@Param('id') id){
        return this.despesasService.deleteDespesa(id);
    }
}
