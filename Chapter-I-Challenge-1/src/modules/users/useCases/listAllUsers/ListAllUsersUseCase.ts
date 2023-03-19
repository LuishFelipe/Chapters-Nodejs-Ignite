import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);
    if (!isAdmin) {
      throw new Error("user already exists!");
    }
    if (!isAdmin.admin === true) {
      throw new Error("this user is not an admin!");
    } else {
      return this.usersRepository.list();
    }
  }
}

export { ListAllUsersUseCase, IRequest };
