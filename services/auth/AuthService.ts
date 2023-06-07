import { User } from '@omegup-school/user-entity';

class AuthService {
  private currentUser: User | null = null;

  signIn(user: User) {
    this.currentUser = user;
    // store user details and authentication token in local storage
    // localStorage.setItem('currentUser', JSON.stringify(user));
  }

  signOut() {
    this.currentUser = null;
    // remove user details and authentication token from local storage
    // localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}

export const authService = new AuthService();
