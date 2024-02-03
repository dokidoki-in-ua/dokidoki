import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.userModel.create(createUserDto);
    return result;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).lean();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).lean();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, updateUserDto, { new: true })
      .lean();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).lean();
  }
}
