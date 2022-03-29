import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesasModule } from './despesas/despesas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "dsc-acc-records",
      autoLoadEntities: true,
      synchronize: true,
    }),
    DespesasModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
