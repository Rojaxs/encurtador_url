
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/entities/users';

export type UserDTO = {
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  amount_of_urls?: number
};

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async findUser(email: string) {
    return this.userModel.findOne({
      where: {
        email:email
      },
      raw: true
    });
  }
}
