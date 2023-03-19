import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existUser = this.usersRepository.findById(user_id);
    if (!existUser) {
      throw new Error("This user dont exists!");
    }
    const user = this.usersRepository.turnAdmin(existUser);
    return user;
  }
}

export { TurnUserAdminUseCase };
