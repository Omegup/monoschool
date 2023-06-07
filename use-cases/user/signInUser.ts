import { User } from "@omegup-school/user-entity";
import { UserGateway } from "@omegup-school/user-gateway";
import { SignInUserDTO } from "@omegup-school/user-dtos/SignInUserDTO";

export class SignInUser {
  constructor(private userGateway: UserGateway) {}

  async execute(data: SignInUserDTO): Promise<User> {
    const user = await this.userGateway.signIn(data);
    return user;
  }
}
