import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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

  @Column("simple-array")
  genres:string[];

  @Column()
  sommaire:string;

  @Column()
  couvertureURL:string;

  @Column("decimal", {array:true})
  notes:number[];

  @Column("simple-array")
  commentaires:string[];

  @Column()
  emplacement:string // à remplacer par le type BookBox je pense
}
