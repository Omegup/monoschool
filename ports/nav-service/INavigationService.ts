export interface Navigation {
  navigate(path: string): void;
}

export interface INavigationService {
  navigateTo(path: string): void;
}
