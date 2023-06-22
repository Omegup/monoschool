import { User } from '@omegup-school/user-entity';
import { UserGateway } from '@omegup-school/user-gateway';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { Either } from 'omegup-school';

export class SignInUser {
  constructor(private userGateway: UserGateway) {}

  execute(
    data: SignInUserDTO
  ): Promise<Either<User, 'login' | 'network' | 'unknown'>> {
    return this.userGateway.signIn(data);
  }
}
