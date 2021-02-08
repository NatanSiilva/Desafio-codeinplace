import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
    @IsString()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Este campo não pode está vazio' })
    password: string;

}