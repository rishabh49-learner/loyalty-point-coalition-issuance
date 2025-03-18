import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class LoginDto{
    @ApiProperty({type:String,description:"Email of the user"})
    @IsEmail()
    @IsNotEmpty()
    email:string

    @ApiProperty({type:String,description:"Password of the user"})
    @IsString()
    @Length(8,20)
    @IsNotEmpty()
    password:string
}