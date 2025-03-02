import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { UserTransformer } from './user.transformer';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
constructor(@InjectModel('User') private UserModel: Model<User>) { }
async create(createUserDto: CreateUserDto): Promise<UserTransformer> {
    let data = new this.UserModel(createUserDto)
    
    const saltOrRounds = 10; // Faktor penentu hashing, semakin tinggi semakin baik, tapi makan waktu hashing, 10 sudah cukup
    const hash = await bcrypt.hash(data.password, saltOrRounds); // Kita hash password yang dijadikan objek dari dto
    data.password = hash // Password yang ada di objek kita timpa dengan password yang sudah dihash
return UserTransformer.singleTransform(await data.save())
  }
findAll() {
    return `This action returns all user`;
  }
findOne(id: number) {
    return `This action returns a #${id} user`;
  }
async findOneByEmail(email: string): Promise<UserTransformer> {
    let data = await this.UserModel.findOne({ email: email })
if (!data) {
      throw new Error('Data not found!')
    }
return UserTransformer.singleTransform(data)
  }
async findOneByEmailObject(email: string): Promise<User> {
    let data = await this.UserModel.findOne({ email: email })
if (!data) {
      throw new Error('User not found!')
    }
return data
  }
update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
remove(id: number) {
    return `This action removes a #${id} user`;
  }
}