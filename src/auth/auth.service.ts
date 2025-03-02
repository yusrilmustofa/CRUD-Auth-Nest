import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { UserTransformer } from 'src/user/user.transformer';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }
async login(createAuthDto: CreateAuthDto) {
    let data = await this.userService.findOneByEmailObject(createAuthDto.email)
if (!data || !await bcrypt.compare(createAuthDto.password, data.password)) {
      throw new Error('Invalid username or password')
    }
let transformer = UserTransformer.singleTransform(data)
    transformer['access_token'] = this.jwtService.sign({ "id": transformer['id'] }, { secret: process.env.JWT_SECRET })
return transformer
  }
}