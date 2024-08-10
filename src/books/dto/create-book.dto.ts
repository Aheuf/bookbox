import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {

  @IsString()
  @IsNotEmpty()
  isbm:string;

  @IsString()
  @IsNotEmpty()
  titre:string;

  @IsString()
  @IsNotEmpty()
  auteur:string;

  @IsString()
  @IsNotEmpty()
  langage:string;

  @IsInt()
  pages:number;

  @IsArray()
  @IsString({each:true})
  @ArrayMinSize(1)
  genres:string[];

  @IsString()
  sommaire:string;

  @IsString()
  couvertureURL:string;

  @IsArray()
  @IsInt({each:true})
  notes:number[];

  @IsArray()
  @IsString({each:true})
  commentaires:string[];

  @IsString()
  @IsNotEmpty()
  emplacement:string // à remplacer par le type BookBox je pense
}
