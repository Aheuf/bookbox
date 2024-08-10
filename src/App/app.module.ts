import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE, BDDType } from '../constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: BDDType,
      host: DATABASE.host,
      port: DATABASE.port,
      username: DATABASE.username,
      password: DATABASE.password,
      database: DATABASE.database,
      entities: [/** les entités à enregistrer en BDD */],
      synchronize: true, // Utiliser uniquement en développement pour synchroniser le schéma
    }),
    TypeOrmModule.forFeature([/** les entités à enregistrer en BDD */]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
