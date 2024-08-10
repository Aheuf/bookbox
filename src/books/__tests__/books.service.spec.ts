import { Test, TestingModule } from "@nestjs/testing";
import { BooksService } from "../books.service";
import { Repository } from "typeorm";
import { Book } from "../entities/book.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { createBookMock } from "../dto/mocks/createBookDTO.mock";
import { UpdateBookDto } from "../dto/update-book.dto";

export const mockRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  create:jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe("BooksService", () => {
  let service: BooksService;
  let repository: Repository<Book>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
      {provide: getRepositoryToken(Book), useValue: mockRepository()}],
    }).compile();

    service = module.get<BooksService>(BooksService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return an array of books", async () => {
    const result = [new Book(), new Book()];
    jest.spyOn(repository, "find").mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it("should return a single book", async () => {
    const result = new Book();
    jest.spyOn(repository, "findOne").mockResolvedValue(result);

    expect(await service.findOne(1)).toBe(result);
  });

  it("should create a new book", async () => {
    const createBookDto = createBookMock;
    const result = new Book();
    jest.spyOn(repository, "save").mockResolvedValue(result);

    expect(await service.create(createBookDto)).toBe(result);
  });

  it("should update a book", async () => {
    jest.spyOn(repository, "update").mockResolvedValue(undefined);
    let updatedBookDTOMock:UpdateBookDto = {...createBookMock, titre: "le seigneur des anneaux"}

    await service.update(1, updatedBookDTOMock);
    expect(repository.update).toHaveBeenCalledWith(1, updatedBookDTOMock);
  });

  it("should remove a book", async () => {
    jest.spyOn(repository, "delete").mockResolvedValue(undefined);

    await service.remove(1);
    expect(repository.delete).toHaveBeenCalledWith(1);
  });
});
