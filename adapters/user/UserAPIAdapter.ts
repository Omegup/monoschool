import { User } from '@omegup-school/user-entity';
import { UserGateway } from '@omegup-school/user-gateway';
import { SignInUserDTO } from '@omegup-school/user-dtos/SignInUserDTO';
import { Either } from 'omegup-school';

export class UserAPIAdapter implements UserGateway {
  async signIn(
    data: SignInUserDTO
  ): Promise<Either<User, 'login' | 'network' | 'unknown'>> {
    if (!navigator.onLine) return { ok: false, error: 'network' };
    if (Math.random() < 0.3) return { ok: false, error: 'unknown' };
    // Simulate API call
    const { email, password } = data;
    if (password !== 'password') return { ok: false, error: 'login' };
    const user = { id: 1, email };
    return { ok: true, result: user };
  }
}