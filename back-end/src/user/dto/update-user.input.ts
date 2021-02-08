import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    @IsOptional() // Vou aplicar as estings acima, porém o name só se eu passar o name 
    name?: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    @IsOptional() 
    email?: string;

    @IsString()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    @IsOptional() 
    password: string;
    
}