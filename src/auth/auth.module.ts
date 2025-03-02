import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports :[UserModule,ConfigModule.forRoot(),PassportModule.register({ defaultStrategy: 'jwt' }), // Pastikan strategi default 'jwt'
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),],
  controllers: [AuthController],
  providers: [AuthService, UserModule, JwtService],
  exports:[PassportModule]
})
export class AuthModule {}
