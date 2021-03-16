import { AppService } from './app.service';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUsers(): User[];
    createUser(createUser: UserDto): any;
    update(id: string, updateUserDto: UserDto): string;
    remove(id: string): string;
}
