import { DespesasRepository } from './despesas.repository';
import { Injectable } from '@nestjs/common';
import { CreateDespesaDTO } from './dtos/create-despesa.dto';
import { UpdateDespesaDTO } from './dtos/update-despesa.dto';

@Injectable()
export class DespesasService {

    constructor(private DespesasRepository: DespesasRepository){

    }

    getAllDespesas(){
        return this.DespesasRepository.getAllDespesas();
    }

    //tutorial aula
    
    getDespesasById(id){
        return this.DespesasRepository.getDespesasById(id);
    }
  
    createDespesa(createDespesaDTO: CreateDespesaDTO){
        return this.DespesasRepository.createDespesa(createDespesaDTO);
    }
   
    updateDespesa(id, UpdateDespesaDTO){
        return this.DespesasRepository.updateDespesa(id, UpdateDespesaDTO);
    }

    deleteDespesa(id){
        return this.DespesasRepository.deleteDespesa(id);
    }


}
