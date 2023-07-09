import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async verify(username: string, password: string): Promise<boolean> {
    const foundUser = await this.userModel.findOne({ username, password });
    return foundUser ? true : false;
  }
}
