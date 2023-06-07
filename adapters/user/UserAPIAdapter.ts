import { User } from '@omegup-school/user-entity';
import { UserGateway } from '@omegup-school/user-gateway';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';

export class UserAPIAdapter implements UserGateway {
  async signIn(data: SignInUserDTO): Promise<User> {
    // Simulate API call
    const { email } = data;
    const user = { id: 1, email };
    return user;
  }
}
