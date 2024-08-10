import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>){
      //
  }

  create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({where: {id}});
  }

  async update(id: number, updateBookDto: UpdateBookDto):Promise<void> {
    await this.bookRepository.update(id,updateBookDto);
  }

  async remove(id: number):Promise<void> {
    await this.bookRepository.delete(id);
  }
}
