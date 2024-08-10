import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isbm:string;

  @Column()
  titre:string;

  @Column()
  auteur:string;

  @Column()
  langage:string;

  @Column()
  pages:number;

  @Column()
  genres:string[];

  @Column()
  sommaire:string;

  @Column()
  couvertureURL:string;

  @Column()
  notes:number[];

  @Column()
  commentaires:string[];

  @Column()
  emplacement:string // à remplacer par le type BookBox je pense
}
