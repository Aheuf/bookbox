import { Test, TestingModule } from "@nestjs/testing";
import { BooksController } from "../books.controller";
import { BooksService } from "../books.service";
import { Book } from "../entities/book.entity";
import { createBookMock } from "../dto/mocks/createBookDTO.mock";
import { CreateBookDto } from "../dto/create-book.dto";
import { UpdateBookDto } from "../dto/update-book.dto";

describe("BooksController", () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [{
        provide: BooksService,
        useValue: {
          findAll: jest.fn(),
          findOne: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        },
      }],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);

  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return an array of books", async () => {
    const result = [new Book(), new Book()];
    jest.spyOn(service, "findAll").mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
  });

  it("should return a single book", async () => {
    const result = new Book();
    jest.spyOn(service, "findOne").mockResolvedValue(result);

    expect(await controller.findOne("1")).toBe(result);
  });

  it("should create a new book", async () => {
    const createBookDto: CreateBookDto = createBookMock;
    const result = new Book();
    jest.spyOn(service, "create").mockResolvedValue(result);

    expect(await controller.create(createBookDto)).toBe(result);
  });

  it("should update a book", async () => {
    jest.spyOn(service, "update").mockResolvedValue(undefined);
    let updatedBookDTOMock:UpdateBookDto = {...createBookMock, titre: "le seigneur des anneaux"}

    await controller.update("1", updatedBookDTOMock);
    expect(service.update).toHaveBeenCalledWith(1, updatedBookDTOMock);
  });

  it("should remove a book", async () => {
    jest.spyOn(service, "remove").mockResolvedValue(undefined);

    await controller.remove("1");
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
