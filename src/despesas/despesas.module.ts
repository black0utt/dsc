import { DespesasRepository } from './despesas.repository';
import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DespesasRepository])
  ],
  controllers: [DespesasController],
  providers: [DespesasService]
})
export class DespesasModule {}
