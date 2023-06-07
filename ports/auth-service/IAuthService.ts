import { User } from '@omegup-school/user-entity';
export interface IAuthService {
  readonly currentUser: User | null;

  signIn(user: User): void;
  signOut(): void;

  isAuthenticated(): boolean;
}
