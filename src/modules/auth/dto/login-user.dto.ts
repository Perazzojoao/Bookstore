import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LogInDto {

  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  @MinLength(3, { message: 'O campo name deve ter no mínimo 3 caracteres' })
  @MaxLength(100, { message: 'O campo name deve ter no máximo 100 caracteres' })
  name: string;

  @IsEmail({}, { message: 'O campo email deve ser um email válido'})
  @IsNotEmpty({ message: 'O campo email é obrigatório'})
  email: string;

  @IsNotEmpty({ message: 'O campo password é obrigatório'})
  password: string;
}