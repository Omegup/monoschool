import { Navigation, INavigationService } from '@omegup-school/nav-service-port';
export class NavigationService implements INavigationService {
  constructor(private navigation: Navigation) {}

  navigateTo(path: string) {
    this.navigation.navigate(path);
  }
}
