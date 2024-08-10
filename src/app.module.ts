import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE, BDDType } from "./constants";
import { BooksController } from "./Books/books.controller";
import { BooksService } from "./Books/books.service";
import { Book } from "./Books/entities/book.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: BDDType,
      host: DATABASE.host,
      port: DATABASE.port,
      username: DATABASE.username,
      password: DATABASE.password,
      database: DATABASE.database,
      entities: [Book],
      synchronize: true, // Utiliser uniquement en développement pour synchroniser le schéma
    }),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
