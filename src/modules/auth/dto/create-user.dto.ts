import { Role } from '../interfaces/auth-service.interface';
import { IsNotEmpty, IsEmail, Matches, MinLength, MaxLength, IsOptional } from 'class-validator';
import { UserRequest } from '../interfaces/auth-service.interface';

export class CreateUserDto implements UserRequest {

  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  @MinLength(3, { message: 'O campo name deve ter no mínimo 3 caracteres' })
  @MaxLength(100, { message: 'O campo name deve ter no máximo 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  @IsEmail({}, { message: 'O campo email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'O campo password é obrigatório' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+).{6,30}$/, {
    message:
      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 6 e 30 caracteres.',
  })
  password: string;

  @IsOptional()
  role?: Role;
}