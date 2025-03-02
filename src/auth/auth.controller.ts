import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AppResponse } from 'src/response.base';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}
@Post('login')
  async login(@Res() res, @Body() createAuthDto: CreateAuthDto) {
    try {
      let data = await this.authService.login(createAuthDto);
      return AppResponse.ok(res, data, "Success!")
    } catch (e) {
      console.trace(e)
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Post('register')
  async register(@Res() res, @Body() createUserDto: CreateUserDto) {
    try {
      let data = await this.userService.create(createUserDto);
      return AppResponse.ok(res, data, "Successfully register, now you could login!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
}