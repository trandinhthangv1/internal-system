import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    username: 'Thang',
    password: '123',
  },
];

@Injectable()
export class UsersService {
  async verify(username: string, password: string): Promise<boolean> {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password,
    );

    return foundUser ? true : false;
  }
}
