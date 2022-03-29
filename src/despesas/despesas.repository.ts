import { NotFoundException } from '@nestjs/common';
import { UpdateDespesaDTO } from './dtos/update-despesa.dto';

import {EntityRepository, Repository } from 'typeorm';
import { Despesa } from "./despesa.entity";
import { CreateDespesaDTO } from "./dtos/create-despesa.dto";

@EntityRepository(Despesa)
export class DespesasRepository extends Repository<Despesa>{


    getAllDespesas(){
        return this.createQueryBuilder('despesa').getMany();
    }

    getDespesasById(id){
        return this.findOne(id);
    }
  
    createDespesa(createDespesaDTO: CreateDespesaDTO){
        const {name, description, data, valor} = createDespesaDTO;
        let despesa = this.create({
            name,
            description,
            data,
            valor
        });
        return this.save(despesa);
    }
   
    async updateDespesa(id, UpdateDespesaDTO: UpdateDespesaDTO){
        const {name, description, data, valor} = UpdateDespesaDTO;

        const despesa = await this.getDespesasById(id)
        if(!despesa)
            throw new NotFoundException();
        

        despesa.name = name;
        despesa.description = description;
        despesa.data = data;
        despesa.valor = valor;
        
        return this.save(despesa);
    }

    deleteDespesa(id){

        return this.delete(id)
    }
}