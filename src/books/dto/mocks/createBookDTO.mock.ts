import { CreateBookDto } from "../create-book.dto";

export const createBookMock: CreateBookDto = {
  isbm: "123456789",
  titre: "la guerre des mondes",
  auteur: "H. G. Wells",
  langage: "fr",
  pages: 120,
  genres: ["science-fiction"],
  sommaire: "c'est la guerre entre les mondes",
  couvertureURL: "https://shorturl.at/GPYhZ",
  notes: [3.8,4.4,5.5],
  commentaires: ["trop bien"],
  emplacement: "Niort"
}