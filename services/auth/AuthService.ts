import { IAuthService } from '@omegup-school/auth-service-port';
import { INavigationService } from '@omegup-school/nav-service-port';
import { User } from '@omegup-school/user-entity';

export class AuthService implements IAuthService {
  private _currentUser: User | null = null;

  get currentUser() {
    return this._currentUser;
  }

  constructor(private nav: INavigationService) {}

  signIn(user: User) {
    this._currentUser = user;
    this.nav.navigateTo('/dashboard');
    // store user details and authentication token in local storage
    // localStorage.setItem('currentUser', JSON.stringify(user));
  }

  signOut() {
    this._currentUser = null;
    // remove user details and authentication token from local storage
    // localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this._currentUser !== null;
  }
}
