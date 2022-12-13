import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  getUsers() {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
      
  async createUser(request: CreateUserDto) {
    const newUser = await this.userRepository.create({
      username : request.username,
      email : request.email,
      password : request.password
    });
    return await this.userRepository.save(newUser);
  }
      
  async findUsersById(id: number) {
    let userExist = await this.userRepository.findOne({
      where : {
        user_id : id
      }
    });
  }
  async updateUser(id:number, request:CreateUserDto){
    let userExist = await this.userRepository.findOne({
      where : {
        user_id : id
      }
    });
    if(!userExist){
      throw new BadRequestException('data tak adeu')
    }
    userExist.email = request.email;
    userExist.username = request.username;
    userExist.password = request.password;
    return this.userRepository.save(userExist);
  }
}