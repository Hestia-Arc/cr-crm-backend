import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateLeadDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  userId: string;

  @IsPhoneNumber()
  phone?: string;
  // score?: number;
  budget?: number;
}
